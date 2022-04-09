import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import CompanyPage from './pages/CompanyPage/CompanyPage'
import EntityNotFound from 'pages/EntityNotFound/EntityNotFound'
import { CompanyProvider } from './state/companyContext'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* TODO: if apiState == loading, render loading page */}
        <CompanyProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/company" component={CompanyPage} />
            <Route exact path="/books" component={CompanyPage} />
            <Route exact path="/checkout" component={CompanyPage} />
            <Route path="*" component={EntityNotFound} />
          </Switch>
        </CompanyProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
