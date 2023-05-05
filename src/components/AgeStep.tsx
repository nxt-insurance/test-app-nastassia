import React, { useContext, useState } from 'react'

import { StepContext } from '../contexts'
import { PURCHASE_STEPS } from '../constants'

export const AgeStep = () => {
  const { setStepValue, values } = useContext(StepContext)

  const [age, setAge] = useState(0)

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        />
      </div>
      <button
        disabled={!age}
        onClick={() =>
          setStepValue({
            values: {
              ...values,
              ...{ [PURCHASE_STEPS.AGE]: age },
            },
            step: PURCHASE_STEPS.NAME,
          })
        }
      >
        Next
      </button>
    </>
  )
}
