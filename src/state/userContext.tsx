import { createContext } from 'react'

export const UserContext = createContext({})

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const userContext = {
    //not used yet
    // getUserProfile: () => user,
  }

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}
