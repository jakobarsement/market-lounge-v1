import { createContext } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'

export const UserContext = createContext({})

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  // const { user, isAuthenticated, isLoading } = useAuth0()

  const userContext = {
    //not used yet
    // getUserProfile: () => user,
  }

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}
