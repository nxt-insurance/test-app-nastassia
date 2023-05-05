import React, { useState } from 'react'

interface AgeStepProps {
    next: (field: string, value: number) => void
}

const AgeStep = ({ next }: AgeStepProps) => {
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
        ></input>
      </div>
      <button onClick={() => next('age', age)}>Next</button>
    </>
  )
}

export default AgeStep
