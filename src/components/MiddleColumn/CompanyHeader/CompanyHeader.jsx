import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { CompanyContext } from 'state/companyContext'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { upperCase } from 'lodash'
import './CompanyHeader.scss'
const baseURL = process.env.REACT_APP_BASE_URL
const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY

function CompanyHeader() {
  const [searchTerm, setSearchTerm] = useState('')
  const [summaryData, setSummaryData] = useState()
  const [isDescriptionShown, setIsDescriptionShown] = useState(false)
  const { setCompanySymbol, getCompanySymbol } = useContext(CompanyContext)
  const history = useHistory()

  const summaryUrl = `${baseURL}/profile/${getCompanySymbol()}?apikey=${FIN_PREP_API_KEY}`

  useEffect(() => {
    if (!summaryUrl) return
    const fetchData = async () => {
      const response = await fetch(summaryUrl)
      const data = await response.json()
      setSummaryData(data)
    }
    fetchData()
  }, [summaryUrl])

  const handleSubmit = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && !!searchTerm) {
      setCompanySymbol(searchTerm)
      history.push(`/company/${upperCase(searchTerm)}`)
    }
  }
  return (
    <div className="company-header">
      <div className="company-search-container">
        <span onClick={handleSubmit} className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          //TODO: on state change implement search
          className="company-input-box"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleSubmit}
        />
      </div>
      <div className="company-details">
        <h2>
          {getCompanySymbol()}
          <span className="description-icon">
            <FontAwesomeIcon
              onMouseEnter={() => setIsDescriptionShown(true)}
              onMouseLeave={() => setIsDescriptionShown(false)}
              className="fa-info-circle"
              icon={faInfoCircle}
            ></FontAwesomeIcon>
          </span>
        </h2>
        {isDescriptionShown && <p className="company-description">{summaryData[0]?.description}</p>}
        {!!summaryData && (
          <p>
            <strong>CEO: </strong> <span>{summaryData[0]?.ceo}</span>{' '}
          </p>
        )}
      </div>
    </div>
  )
}

export default CompanyHeader
