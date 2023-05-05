import React, { useState } from 'react'

type AgeStepProps = {
  next: (field: string, value: number) => void
}

export const AgeStep = ({ next }: AgeStepProps) => {
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
      <button onClick={() => next('age', age)}>Next</button>
    </>
  )
}
