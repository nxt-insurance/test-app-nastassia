import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('Home page', () => {
  it('renders both insurances', () => {
    render(<App />)
    expect(screen.getByText(/developer insurance/i)).toBeInTheDocument()
    expect(screen.getByText(/designer insurance/i)).toBeInTheDocument()
  })

  it('navigates to developer & designer insurance form on link click', async () => {
    render(<App />)
    const developerInsurance = screen.getByText(/developer insurance/i)

    // Go to developer insurance page
    userEvent.click(developerInsurance)
    expect(screen.getByText(/Buying Developer/i)).toBeInTheDocument()

    // Go back to the home page
    const backLink = screen.getByText(/back/i)
    await userEvent.click(backLink)
    expect(screen.getByText(/Choose your insurance/)).toBeInTheDocument()
    const designerInsurance = screen.getByText(/designer insurance/i)

    // Go to designer insurance page
    userEvent.click(designerInsurance)
    expect(screen.getByText(/Buying Designer/i)).toBeInTheDocument()
  })
})
