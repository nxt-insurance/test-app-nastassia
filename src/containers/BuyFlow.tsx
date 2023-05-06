import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  StepContext,
  defaultStepContextVal,
  StepContextType,
  StepValuesType,
} from '../contexts'
import {
  PRODUCT_IDS,
  PURCHASE_STEPS,
  ROUTES,
  DEVELOPER_PURCHASE_STEPS,
  DESIGNER_PURCHASE_STEPS,
} from '../constants'
import { AgeStep, EmailStep, SummaryStep, NameStep } from '../components'

const PRODUCT_IDS_TO_NAMES: { [key in PRODUCT_IDS]: string } = {
  [PRODUCT_IDS.DEVELOPER_INSURANCE]: 'Developer Insurance',
  [PRODUCT_IDS.DESIGNER_INSURANCE]: 'Designer Insurance',
}

const STEPS_COMPONENTS: { [key in PURCHASE_STEPS]: () => JSX.Element } = {
  [PURCHASE_STEPS.EMAIL]: EmailStep,
  [PURCHASE_STEPS.AGE]: AgeStep,
  [PURCHASE_STEPS.NAME]: NameStep,
  [PURCHASE_STEPS.SUMMARY]: SummaryStep,
}

const STEPS: { [key in PRODUCT_IDS]: PURCHASE_STEPS[] } = {
  [PRODUCT_IDS.DEVELOPER_INSURANCE]: DEVELOPER_PURCHASE_STEPS,
  [PRODUCT_IDS.DESIGNER_INSURANCE]: DESIGNER_PURCHASE_STEPS,
}

type BuyFlowProps = {
  productId: PRODUCT_IDS
}

export const BuyFlow = ({ productId }: BuyFlowProps) => {
  const [stepsData, setStepsData] = useState<
    Omit<StepContextType, 'setStepValue'>
  >({
    ...defaultStepContextVal,
    step: STEPS[productId][0],
  })

  const setStepValue = (values: StepValuesType) => {
    const currentStepIndex = STEPS[productId].indexOf(stepsData.step)
    setStepsData({
      values,
      ...{ step: STEPS[productId][currentStepIndex + 1] },
    })
  }

  const StepComponent = STEPS_COMPONENTS[stepsData.step]

  return (
    <>
      <Link to={ROUTES.HOME}>⬅️Back</Link>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>

      <StepContext.Provider value={{ ...stepsData, setStepValue }}>
        <StepComponent />
      </StepContext.Provider>
    </>
  )
}
