import { useState } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import CompanyPage from './pages/CompanyPage/CompanyPage'
import EntityNotFound from 'pages/EntityNotFound/EntityNotFound'
import { CompanySymbolContext } from './state/companyContext'
import './App.scss'

const App = () => {
  const [companySymbol, setCompanySymbol] = useState('AAPL')
  return (
    <BrowserRouter>
      <div className="App">
        {/* TODO: if apiState == loading, render loading page */}
        <Switch>
          {/* prettier-ignore */}
          <CompanySymbolContext.Provider value={{ companySymbol, setCompanySymbol }}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/company" component={CompanyPage} />
          <Route exact path="/books" component={CompanyPage} />
          <Route exact path="/checkout" component={CompanyPage} />
          <Route path="*" component={EntityNotFound} />
          </CompanySymbolContext.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
