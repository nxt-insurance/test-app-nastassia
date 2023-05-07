import React, { useContext, useState } from 'react'

import { StepContext } from '../contexts'
import { PURCHASE_STEPS } from '../constants'

export const NameStep = () => {
  const { setStepValue, values } = useContext(StepContext)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <>
      <div>
        Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(value)
          }}
          value={firstName}
          name="firstName"
          aria-label="firstName"
        />
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(value)
          }}
          value={lastName}
          name="lastName"
          aria-label="lastName"
        />
      </div>
      <button
        disabled={!firstName || !lastName}
        onClick={() =>
          setStepValue({
            ...values,
            ...{ [PURCHASE_STEPS.NAME]: { firstName, lastName } },
          })
        }
      >
        Next
      </button>
    </>
  )
}
