import React, { useState } from 'react'
import AgeStep from '../components/AgeStep'
import EmailStep from '../components/EmailStep'
import SummaryStep from '../components/SummaryStep'
import { ProductIds } from '../constants'
import {Link} from "react-router-dom";

interface BuyFlowProps {
  productId: ProductIds
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.DEVELOPER_INSURANCE]: 'Developer Insurance',
  [ProductIds.DESIGN_INSURANCE]: 'Designer Insurance',
}

export const BuyFlow = ({ productId }: BuyFlowProps) => {
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <Link to="/">⬅️Back</Link>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {(currentStep === 'email' && (
        <EmailStep next={getStepCallback('age')} />
      )) ||
        (currentStep === 'age' && (
          <AgeStep next={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}
