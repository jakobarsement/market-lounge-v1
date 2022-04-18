import LoginButton from 'components/LoginButton'
import LogoutButton from 'components/LogoutButton'
import { Link } from 'react-router-dom'

import './PrimaryNavbar.scss'
const PrimaryNavbar = (props) => {
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
          <LoginButton className="login" />
          <LogoutButton className="logout" />
        </div>
      </div>
    </div>
  )
}
export default PrimaryNavbar
