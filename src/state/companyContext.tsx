import { createContext, useState } from 'react'
import { useLocation } from 'react-router'

export const CompanyContext = createContext({})

export const CompanyProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const location = useLocation()
  const paths = location.pathname.split('/').filter((x) => x !== '')
  const initialSymbol = paths[0] === 'company' && !!paths[1] ? paths[1] : 'AAPL'

  const [companyData, setCompanyData] = useState({ symbol: initialSymbol })
  const companyContext = {
    tammy: 'somestring',
    trisha: 'another',
    setCompanySymbol: (_symbol) => setCompanyData({ ...companyData, symbol: _symbol }),
    getCompanySymbol: () => companyData.symbol,
  }

  return <CompanyContext.Provider value={companyContext}>{children}</CompanyContext.Provider>
}
