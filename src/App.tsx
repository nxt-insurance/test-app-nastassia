import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BuyFlow, Home } from './containers'
import { ProductIds } from './constants'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route path="/buy/insurance_developer">
            <BuyFlow productId={ProductIds.DEVELOPER_INSURANCE} />
          </Route>
          <Route path="/buy/insurance_designer">
            <BuyFlow productId={ProductIds.DEVELOPER_INSURANCE} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
