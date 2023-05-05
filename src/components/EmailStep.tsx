import React, { useState, useContext } from 'react'

import { StepContext } from '../contexts'
import { PURCHASE_STEPS } from '../constants'

export const EmailStep = () => {
  const [email, setEmail] = useState('')
  const { setStepValue, values } = useContext(StepContext)

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>

      <button
        onClick={() =>
          setStepValue({
            values: {
              ...values,
              ...{ [PURCHASE_STEPS.EMAIL]: email },
            },
            step: PURCHASE_STEPS.AGE,
          })
        }
      >
        Next
      </button>
    </>
  )
}
