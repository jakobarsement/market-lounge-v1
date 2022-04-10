import { upperCase } from 'lodash'
import { createContext, useEffect, useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router'
import { CompanyContext } from './companyContext'

export const NavigationContext = createContext({})

export const NavigationProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const location = useLocation()
  const history = useHistory()
  const { setCompanySymbol, getCompanySymbol } = useContext(CompanyContext) as any

  const [navigation, setNavigation] = useState({ currentPath: location.pathname })

  console.log('companysymbol', getCompanySymbol())
  // sync app with current path
  useEffect(() => {
    const paths = navigation.currentPath.split('/').filter((x) => x !== '')
    if (paths[0] === 'company' && !!paths[1]) setCompanySymbol(upperCase(paths[1]))
    if (paths[0] === 'company' && !paths[1]) {
      // keep url and navigation state in sync
      history.push(`/company/${upperCase(getCompanySymbol())}`)
      // TODO: experiment with removing current path from state, since we can always access it
      // using useLocation()
      setNavigation({ ...navigation, currentPath: location.pathname })
    }

    // eslint-disable-next-line
  }, [location])

  const navigationContext = {
    getCurrentPath: () => navigation.currentPath,
    getCurrentPaths: () => navigation.currentPath.split('/').filter((x) => x !== ''),
  }

  return <NavigationContext.Provider value={navigationContext}>{children}</NavigationContext.Provider>
}
