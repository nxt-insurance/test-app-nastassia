import React, { useState } from 'react'

type NameStepProps = {
  next: (field: string, value: number) => void
}

export const NameStep = ({ next }: NameStepProps) => {
  const [firstName, setFirstName] = useState(0)
  const [lastName, setLastName] = useState(0)
  return (
    <>
      <div>
        Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(Number(value))
          }}
          value={firstName}
        />
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(Number(value))
          }}
          value={lastName}
        />
      </div>
      <button onClick={() => next('summary', firstName)}>Next</button>
    </>
  )
}
