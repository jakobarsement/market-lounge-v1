import { useContext } from 'react'

import RightColumn from '../../components/RightColumn/RightColumn'
import LeftColumn from '../../components/LeftColumn/LeftColum'
import CompanyHeader from '../../components/MiddleColumn/CompanyHeader/CompanyHeader'
import SharePriceChart from '../../components/MiddleColumn/SharePriceChart/SharePriceChart'
import CompanyTableDirectory from '../../components/MiddleColumn/ChartDirectories/TableCellDirectory/TableCellDirectory'
import IntensityBarDirectory from '../../components/MiddleColumn/ChartDirectories/IntensityBarDirectory/IntensityBarDirectory'
import EmailForm from '../../components/MiddleColumn/EmailForm/EmailForm'

import { CompanySymbolContext } from '../../state/companyContext'

import './CompanyPage.scss'

const CompanyPage = () => {
  const { companySymbol } = useContext(CompanySymbolContext)

  return (
    <>
      {/*TODO: {window.alert("affiliates")} */}
      {/*TODO: Sidebars that show initially, but collapse and bounce againsts window*/}
      <div className="top-three-columns">
        <div className="left-column">
          <LeftColumn></LeftColumn>
        </div>
        <div className="middle-column">
          <CompanyHeader companySymbol={companySymbol} />
          <SharePriceChart companySymbol={companySymbol} />
          {/*TODO: export company excel */}
          <CompanyTableDirectory companySymbol={companySymbol} />
          <IntensityBarDirectory companySymbol={companySymbol} />
        </div>
        <div className="right-column">
          <RightColumn></RightColumn>
        </div>
      </div>
      <div className="email-form">
        <EmailForm></EmailForm>
      </div>
    </>
  )
}

export default CompanyPage
