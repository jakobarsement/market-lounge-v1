import LoginButton from 'components/LoginButton'
import LogoutButton from 'components/LogoutButton'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { API } from 'aws-amplify'

import './PrimaryNavbar.scss'

const PrimaryNavbar = () => {
  const { user, isAuthenticated } = useAuth0()

  if (user) API.post('mailchimpApi', '/mailchimpApi', { body: { email: user.email } })

  return (
    <div className="header-main">
      <div className="logo-left">
        <Link className="logo-container" to="/">
          {/*  Logo Placeholder */}
        </Link>
      </div>
      <div className="header-options">
        <Link className="option" to="/">
          <h4>Home</h4>
        </Link>
        <Link className="option" to={window.location.pathname !== '/company' ? '/company' : null}>
          <h4>Company</h4>
        </Link>
        <Link className="option" to="/companypage">
          <h4>Books</h4>
        </Link>
        <Link className="option" to="/companypage">
          <h4>About Us</h4>
        </Link>
        <div className="auth-options">
          {isAuthenticated ? (
            <LogoutButton conditionalAvatar className="logout" />
          ) : (
            <LoginButton className="login" />
          )}
        </div>
      </div>
    </div>
  )
}
export default PrimaryNavbar
