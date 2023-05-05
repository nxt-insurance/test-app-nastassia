import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BuyFlow, { ProductIds } from './buyflow/BuyFlow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <BuyFlow productId={ProductIds.DEVELOPER_INSURANCE} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe&apos;s Developer Insurance</p>
            <Link to="/buy/insurance_dev">Get started!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
