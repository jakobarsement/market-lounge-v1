import { upperCase } from 'lodash'
import { createContext, useEffect, useContext } from 'react'
import { useLocation, useHistory } from 'react-router'
import { CompanyContext } from './companyContext'

export const NavigationContext = createContext({})

export const NavigationProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const location = useLocation()
  const history = useHistory()
  const { setCompanySymbol, getCompanySymbol } = useContext(CompanyContext) as any

  console.log('companysymbol', getCompanySymbol())

  // sync app with current path
  useEffect(() => {
    const paths = location.pathname.split('/').filter((x) => x !== '')
    if (paths[0] === 'company' && !!paths[1]) setCompanySymbol(paths[1])
    if (paths[0] === 'company' && !paths[1]) history.push(`/company/${upperCase(getCompanySymbol())}`)

    // eslint-disable-next-line
  }, [location])

  const navigationContext = {
    //not used yet
    userId: '',
  }

  return <NavigationContext.Provider value={navigationContext}>{children}</NavigationContext.Provider>
}
