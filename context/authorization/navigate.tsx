import Login from '@/(blank)/authorization/Login'
import Register from '@/(blank)/authorization/Register'
import React, { useContext } from 'react'

interface authNavigateType {
  readonly page: JSX.Element
  setPage: (location: 'login' | 'register') => void
}

export const AuthNavigateContext = React.createContext<authNavigateType>({
  page: <Login />,
  setPage: () => {}
})

export function useNavigateAuth (): any {
  return useContext(AuthNavigateContext)
}

const AuthProvider = ({ children }: any): JSX.Element => {
  const [page, setAuth] = React.useState<any>(<Login />)

  const setPage = (location: 'login' | 'register'): void => {
    switch (location) {
      case 'login':
        setAuth(<Login />)
        break
      case 'register':
        setAuth(<Register />)
        break
      default:
        break
    }
  }

  const value = {
    page,
    setPage
  }

  return (
    <AuthNavigateContext.Provider value={value}>
      {children}
    </AuthNavigateContext.Provider>
  )
}

export default AuthProvider
