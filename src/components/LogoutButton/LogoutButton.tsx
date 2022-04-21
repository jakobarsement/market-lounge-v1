import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'
import Avatar from 'components/Avatar'

const LogoutButton = ({ className, conditionalAvatar }) => {
  const { logout, user } = useAuth0()

  return conditionalAvatar ? (
    <Avatar image={user?.picture} onClick={() => logout()} />
  ) : (
    <Button variant="contained" className={className} onClick={() => logout()}>
      Log Out
    </Button>
  )
}

export default LogoutButton
