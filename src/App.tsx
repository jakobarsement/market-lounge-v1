import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { CompanyProvider } from './state/companyContext'
import { NavigationProvider } from 'state/navigationContext'
import { UserProvider } from 'state/userContext'
import LandingPage from './pages/LandingPage/LandingPage'
import CompanyPage from './pages/CompanyPage/CompanyPage'
import EntityNotFound from 'pages/EntityNotFound/EntityNotFound'

import './App.scss'
import PrimaryNavbar from 'components/PrimaryNavbar/PrimaryNavbar'

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
      </div>
    </BrowserRouter>
  )
}

export default App
