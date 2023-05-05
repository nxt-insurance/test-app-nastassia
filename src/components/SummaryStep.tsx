import React from 'react'
import { Link } from 'react-router-dom'

type SummaryStepProps = {
  collectedData: {
    email: string
    age: number
  }
}

export const SummaryStep = ({ collectedData }: SummaryStepProps) => {
  return (
    <>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}
