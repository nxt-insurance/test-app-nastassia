import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { StepContext, defaultStepContextVal } from '../contexts'

export const SummaryStep = () => {
  const {
    setStepValue,
    values: { email, age, name },
  } = useContext(StepContext)

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
          to="/purchased=dev_ins"
          onClick={() => setStepValue(defaultStepContextVal)}
        >
          Purchase
        </Link>
      </div>
    </>
  )
}
