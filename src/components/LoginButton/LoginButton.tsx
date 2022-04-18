import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'

const LoginButton = ({ className }) => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button className={className} variant="contained" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  )
}

export default LoginButton
