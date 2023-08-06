import EmailVerification from '@/app/(blank)/authorization/EmailVerification'
import Login from '@/app/(blank)/authorization/Login'
import Register from '@/app/(blank)/authorization/Register'
import React, { useContext } from 'react'

interface authNavigateType {
  readonly page: JSX.Element
  setPage: (location: 'login' | 'register' | 'verification', props?: { email: string, fullname: string }) => void
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

  const setPage = (location: 'login' | 'register' | 'verification', props?: { email: string, fullname: string }): void => {
    switch (location) {
      case 'login':
        setAuth(<Login />)
        break
      case 'register':
        setAuth(<Register />)
        break
      case 'verification':
        setAuth(<EmailVerification email={props?.email ?? ''} fullname={props?.fullname ?? ''}/>)
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
