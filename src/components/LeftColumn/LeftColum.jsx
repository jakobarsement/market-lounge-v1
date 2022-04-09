import { useContext } from 'react'
import CompanyRatiosChartDirectory from './RatioChartDirectory/RatioChartDirectory'
import { CompanyContext } from 'state/companyContext'

const LeftColumn = () => {
  const { getCompanySymbol } = useContext(CompanyContext)

  return <CompanyRatiosChartDirectory companySymbol={getCompanySymbol()} />
}

export default LeftColumn
