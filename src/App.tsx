import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { CompanyProvider } from './state/companyContext'
import { NavigationProvider } from 'state/navigationContext'
import { UserProvider } from 'state/userContext'
import PrimaryNavbar from 'components/PrimaryNavbar/PrimaryNavbar'
import LandingPage from './pages/LandingPage/LandingPage'
import CompanyPage from './pages/CompanyPage/CompanyPage'
import EntityNotFound from 'pages/EntityNotFound/EntityNotFound'

import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* TODO: if apiState == loading, render loading page */}
        <UserProvider>
          <CompanyProvider>
            <NavigationProvider>
              <PrimaryNavbar />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/company/:id" component={CompanyPage} />
                <Route exact path="/books" component={CompanyPage} />
                <Route exact path="/checkout" component={CompanyPage} />
                <Route path="*" component={EntityNotFound} />
              </Switch>
            </NavigationProvider>
          </CompanyProvider>
        </UserProvider>
        <footer className="footer-main">
          All data provided on Market Lounge is provided for informational purposes only, and is not intended
          for trading or investing purposes.
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
