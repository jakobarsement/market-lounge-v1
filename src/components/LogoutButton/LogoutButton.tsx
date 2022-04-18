import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'

const LogoutButton = ({ className }) => {
  const { logout } = useAuth0()

  return (
    <Button variant="contained" className={className} onClick={() => logout()}>
      Log Out
    </Button>
  )
}

export default LogoutButton
