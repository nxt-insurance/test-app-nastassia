import { createContext } from 'react'

import { PURCHASE_STEPS } from '../constants'

export type StepValuesType = {
  [PURCHASE_STEPS.EMAIL]: string
  [PURCHASE_STEPS.AGE]: number
  [PURCHASE_STEPS.NAME]?: { firstName: string; lastName: string }
}

export type StepContextType = {
  step: PURCHASE_STEPS
  values: StepValuesType
  setStepValue: (values: StepValuesType) => void
}

export const defaultStepContextVal: Omit<StepContextType, 'setStepValue'> = {
  step: PURCHASE_STEPS.EMAIL,
  values: { [PURCHASE_STEPS.EMAIL]: '', [PURCHASE_STEPS.AGE]: 0 },
}

export const defaultStepValues: StepValuesType = {
  [PURCHASE_STEPS.EMAIL]: '',
  [PURCHASE_STEPS.AGE]: 0,
}

export const StepContext = createContext<StepContextType>({
  ...defaultStepContextVal,
  setStepValue: (values) => values,
})
