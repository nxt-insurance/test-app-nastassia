import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BuyFlow, Home } from './containers'
import { PRODUCT_IDS, ROUTES } from './constants'

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to={ROUTES.HOME}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>

      <Switch>
        <Route path={ROUTES.DEVELOPER}>
          <BuyFlow productId={PRODUCT_IDS.DEVELOPER_INSURANCE} />
        </Route>
        <Route path={ROUTES.DESIGNER}>
          <BuyFlow productId={PRODUCT_IDS.DESIGN_INSURANCE} />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
)
export default App
