import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  StepContext,
  defaultStepContextVal,
  StepContextType,
} from '../contexts'
import { PRODUCT_IDS, PURCHASE_STEPS, ROUTES } from '../constants'
import { AgeStep, EmailStep, SummaryStep, NameStep } from '../components'

const PRODUCT_IDS_TO_NAMES = {
  [PRODUCT_IDS.DEVELOPER_INSURANCE]: 'Developer Insurance',
  [PRODUCT_IDS.DESIGN_INSURANCE]: 'Designer Insurance',
}

const STEPS_COMPONENTS: { [key in PRODUCT_IDS]: any } = { // TODO: TYPE ME!
  [PRODUCT_IDS.DEVELOPER_INSURANCE]: {
    [PURCHASE_STEPS.EMAIL]: EmailStep,
    [PURCHASE_STEPS.AGE]: AgeStep,
    [PURCHASE_STEPS.SUMMARY]: SummaryStep,
  },
  [PRODUCT_IDS.DESIGN_INSURANCE]: {
    [PURCHASE_STEPS.EMAIL]: EmailStep,
    [PURCHASE_STEPS.AGE]: AgeStep,
    [PURCHASE_STEPS.NAME]: NameStep,
    [PURCHASE_STEPS.SUMMARY]: SummaryStep,
  },
}

type BuyFlowProps = {
  productId: PRODUCT_IDS
}

export const BuyFlow = ({ productId }: BuyFlowProps) => {
  const [stepsData, setStepValue] = useState<
    Omit<StepContextType, 'setStepValue'>
  >(defaultStepContextVal)

  const StepComponent = STEPS_COMPONENTS[productId][stepsData.step]

  return (
    <>
      <Link to={ROUTES.HOME}>⬅️Back</Link>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>

      <StepContext.Provider value={{ ...defaultStepContextVal, setStepValue }}>
        <StepComponent />
      </StepContext.Provider>
    </>
  )
}
