import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../constants'

export const Home = () => (
  <>
    <p>Welcome to Getsafe&apos;s Insurances</p>
    <p>Choose your insurance: </p>
    <p>
      <Link to={ROUTES.DEVELOPER}>Get a developer insurance</Link>
    </p>
    <p>
      <Link to={ROUTES.DESIGNER}>Get a designer insurance</Link>
    </p>
  </>
)
