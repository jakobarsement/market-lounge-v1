import { createContext, useState } from 'react'

export const CompanyContext = createContext({})

export const CompanyProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [companyData, setCompanyData] = useState({ symbol: 'AAPL' })
  const companyContext = {
    tammy: 'somestring',
    trisha: 'another',
    setCompanySymbol: (_symbol) => setCompanyData({ ...companyData, symbol: _symbol }),
    getCompanySymbol: () => companyData.symbol,
  }

  return <CompanyContext.Provider value={companyContext}>{children}</CompanyContext.Provider>
}
