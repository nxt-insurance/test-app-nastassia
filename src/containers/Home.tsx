import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <>
    <p>Welcome to Getsafe&apos;s Insurances</p>
    <p>Choose your insurance: </p>
    <p>
      <Link to="/buy/insurance_developer">Get a developer insurance</Link>
    </p>
    <p>
      <Link to="/buy/insurance_designer">Get a designer insurance</Link>
    </p>
  </>
)
