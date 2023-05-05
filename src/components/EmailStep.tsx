import React, { useState } from 'react'

interface EmailStepProps {
  next: (field: string, value: string) => void
}

const EmailStep = ({ next }: EmailStepProps) => {
  const [email, setEmail] = useState('')
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
      <button onClick={() => next('email', email)}>Next</button>
    </>
  )
}

export default EmailStep
