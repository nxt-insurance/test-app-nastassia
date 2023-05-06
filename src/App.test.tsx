import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('Home page', () => {
  it('renders both insurances', () => {
    render(<App />)
    const developerInsurance = screen.getByText(/developer insurance/i)
    expect(developerInsurance).toBeInTheDocument()
    const designerInsurance = screen.getByText(/designer insurance/i)
    expect(designerInsurance).toBeInTheDocument()
  })

  it('navigates to developer insurance form on link click', () => {
    render(<App />)
    const developerInsurance = screen.getByText(/developer insurance/i)

    userEvent.click(developerInsurance)
    expect(screen.getByText(/Buying Developer/i)).toBeInTheDocument()
  })

  it('navigates to designer insurance form on link click', () => {
    render(<App />)
    const developerInsurance = screen.getByText(/designer insurance/i)

    userEvent.click(developerInsurance)
    expect(screen.getByText(/Buying Designer/i)).toBeInTheDocument()
  })
})
