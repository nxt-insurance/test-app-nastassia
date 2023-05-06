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
        disabled={age < 1}
        onClick={() =>
          setStepValue({
            ...values,
            ...{ [PURCHASE_STEPS.AGE]: age },
          })
        }
      >
        Next
      </button>
    </>
  )
}
