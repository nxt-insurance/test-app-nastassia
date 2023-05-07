import React, { useState, useContext } from 'react'

import { StepContext } from '../contexts'
import { PURCHASE_STEPS } from '../constants'

const EMAIL_REGEXP_PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
export const EmailStep = () => {
  const { setStepValue, values } = useContext(StepContext)

  const [email, setEmail] = useState('')
  const [validationError, setValidationError] = useState(false)

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setValidationError(
              // Only show validation error when user started typing.
              // Not ideal UX, but for simplicity this is better than no validation at all.
              Boolean(value && !EMAIL_REGEXP_PATTERN.test(value))
            )
            setEmail(value)
          }}
          value={email}
          name="email"
          aria-label="email"
        />
      </div>

      {validationError && (
        <div>
          Please check the data you&apos;ve entered, the email should be filled
          and correct.
        </div>
      )}

      <button
        disabled={validationError || !email}
        onClick={() =>
          setStepValue({
            ...values,
            ...{ [PURCHASE_STEPS.EMAIL]: email },
          })
        }
      >
        Next
      </button>
    </>
  )
}
