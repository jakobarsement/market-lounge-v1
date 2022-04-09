import { useContext } from 'react'
import { CompanyContext } from 'state/companyContext'

import RightColumn from '../../components/RightColumn/RightColumn'
import LeftColumn from '../../components/LeftColumn/LeftColum'
import CompanyHeader from '../../components/MiddleColumn/CompanyHeader/CompanyHeader'
import SharePriceChart from '../../components/MiddleColumn/SharePriceChart/SharePriceChart'
import CompanyTableDirectory from '../../components/MiddleColumn/ChartDirectories/TableCellDirectory/TableCellDirectory'
import IntensityBarDirectory from '../../components/MiddleColumn/ChartDirectories/IntensityBarDirectory/IntensityBarDirectory'
import EmailForm from '../../components/MiddleColumn/EmailForm/EmailForm'

import './CompanyPage.scss'

const CompanyPage = () => {
  const { getCompanySymbol } = useContext(CompanyContext)

  return (
    <>
      {/*TODO: {window.alert("affiliates")} */}
      {/*TODO: Sidebars that show initially, but collapse and bounce againsts window*/}
      <div className="top-three-columns">
        <div className="left-column">
          <LeftColumn />
        </div>
        <div className="middle-column">
          <CompanyHeader />
          <SharePriceChart companySymbol={getCompanySymbol()} />
          {/*TODO: export company excel */}
          <CompanyTableDirectory companySymbol={getCompanySymbol()} />
          <IntensityBarDirectory companySymbol={getCompanySymbol()} />
        </div>
        <div className="right-column">
          <RightColumn />
        </div>
      </div>
      <div className="email-form">
        <EmailForm />
      </div>
    </>
  )
}

export default CompanyPage
