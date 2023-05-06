import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { StepContext, defaultStepValues } from '../contexts'
import { ROUTES } from '../constants'

const SUCCESS_URL: { [key in string]: string } = {
  [ROUTES.DEVELOPER]: 'insurance_developer',
  [ROUTES.DESIGNER]: 'insurance_designer',
}
export const SummaryStep = () => {
  const {
    setStepValue,
    values: { email, age, name },
  } = useContext(StepContext)
  const location = useLocation()

  return (
    <>
      <div>Email: {email}</div>
      <div>Age: {age}</div>
      {name && (
        <div>
          Name: {name.firstName} {name.lastName}
        </div>
      )}
      <div>
        <Link
          to={`/purchased=${SUCCESS_URL[location.pathname]}`}
          onClick={() => setStepValue(defaultStepValues)}
        >
          Purchase
        </Link>
      </div>
    </>
  )
}
