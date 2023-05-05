import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'

interface BuyFlowProps {
  productId: ProductIds
}

export enum ProductIds {
  DEVELOPER_INSURANCE = 'dev_ins',
  DESIGN_INSURANCE = 'design_insurance',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.DEVELOPER_INSURANCE]: 'Developer Insurance',
  [ProductIds.DESIGN_INSURANCE]: 'Designer Insurance',
}

const BuyFlow = (props: BuyFlowProps) => {
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
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === 'email' && <EmailStep next={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep next={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default BuyFlow
