import { useContext, useState } from 'react'
import { CompanyContext } from 'state/companyContext'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { upperCase } from 'lodash'

import './LandingSearch.scss'

const LandingSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { setCompanySymbol } = useContext(CompanyContext)
  let history = useHistory()

  const handleSubmit = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && !!searchTerm) {
      setCompanySymbol(searchTerm)
      history.push(`/company/${upperCase(searchTerm)}`)
    }
  }

  return (
    <div className="main">
      <div className="content">
        <h1 className="title">market lounge</h1>

        <div className="searchbar-container">
          <span onClick={handleSubmit}>
            <i className="fas fa-search fa-2x search-icon" />
          </span>
          <input
            type="text"
            placeholder="search company ticker"
            className="searchbar"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSubmit}
          />
        </div>
        <div className="trending-container">
          <p className="whats-trending">What's trending:</p>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('MSFT')
              history.push('/company/MSFT')
            }}
          >
            MSFT
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('GOOG')
              history.push('/company/GOOG')
            }}
          >
            GOOG
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('AMZN')
              history.push('/company/AMZN')
            }}
          >
            AMZN
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('UPWK')
              history.push('/company/UPWK')
            }}
          >
            UPWK
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('BABA')
              history.push('/company/BABA')
            }}
          >
            BABA
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('FVRR')
              history.push('/company/FVRR')
            }}
          >
            FVRR
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('BYND')
              history.push('/company/BYND')
            }}
          >
            BYND
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('TCEHY')
              history.push('/company/TCEHY')
            }}
          >
            TCEHY
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('ETSY')
              history.push('/company/ETSY')
            }}
          >
            ETSY
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('DIS')
              history.push('/company/DIS')
            }}
          >
            DIS
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol('F')
              history.push('/company/F')
            }}
          >
            F
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingSearch
