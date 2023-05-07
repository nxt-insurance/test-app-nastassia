import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { BuyFlow } from '../BuyFlow'
import { PRODUCT_IDS } from '../../constants'
import userEvent from '@testing-library/user-event'

describe('Purchase flows',  () => {
  it('Developer flow', async () => {
    render(
      <MemoryRouter>
        <BuyFlow productId={PRODUCT_IDS.DEVELOPER_INSURANCE} />
      </MemoryRouter>
    )

    expect(screen.getByText(/Developer Insurance/)).toBeInTheDocument()

    // The button should be disabled if the input is empty
    let nextButton = await screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toHaveAttribute('disabled')

    const emailInput = screen.getByRole('textbox', { name: /email/ })

    // Check if the error is visible if the email is wrong
    await userEvent.type(emailInput, 'email')
    expect(
      screen.getByText(
        "Please check the data you've entered, the email should be filled and correct."
      )
    ).toBeInTheDocument()

    // If the email is valid, the button should be clickable
    await userEvent.type(emailInput, '@test.com')
    expect(nextButton).not.toHaveAttribute('disabled')

    // Go to the next 'Age' step
    await userEvent.click(nextButton)
    expect(screen.getByText(/Age/)).toBeInTheDocument()

    // If the age is <1, the button should be clickable
    const ageInput = screen.getByRole('spinbutton', { name: /age/ })
    nextButton = await screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toHaveAttribute('disabled')

    await userEvent.type(ageInput, '20')
    expect(nextButton).not.toHaveAttribute('disabled')

    // Go to the 'Overview' page
    await userEvent.click(nextButton)
    expect(screen.getByText(/email@test.com/)).toBeInTheDocument()
    expect(screen.getByText(/20/)).toBeInTheDocument()
    expect(screen.getByText('Purchase')).toBeInTheDocument()
  })

  it('Designer flow', async () => {
    render(
      <MemoryRouter>
        <BuyFlow productId={PRODUCT_IDS.DESIGNER_INSURANCE} />
      </MemoryRouter>
    )

    expect(screen.getByText(/Designer Insurance/)).toBeInTheDocument()

    // The button should be disabled if the input is empty
    let nextButton = await screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toHaveAttribute('disabled')

    const emailInput = screen.getByRole('textbox', { name: /email/ })

    // Check if the error is visible if the email is wrong
    await userEvent.type(emailInput, 'email')
    expect(
      screen.getByText(
        "Please check the data you've entered, the email should be filled and correct."
      )
    ).toBeInTheDocument()

    // If the email is valid, the button should be clickable
    await userEvent.type(emailInput, '@test.com')
    expect(nextButton).not.toHaveAttribute('disabled')

    // Go to the next 'Age' step
    await userEvent.click(nextButton)
    expect(screen.getByText(/Age/)).toBeInTheDocument()

    // If the age is <1, the button should be clickable
    const ageInput = screen.getByRole('spinbutton', { name: /age/ })
    nextButton = await screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toHaveAttribute('disabled')

    await userEvent.type(ageInput, '20')
    expect(nextButton).not.toHaveAttribute('disabled')

    // Go to the next 'Name' page
    await userEvent.click(nextButton)
    expect(screen.getByText(/Name/)).toBeInTheDocument()

    // If names inputs are empty, the button should be disabled
    nextButton = await screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toHaveAttribute('disabled')

    const firstNameInput = screen.getByRole('textbox', { name: /firstName/ })
    const secondNameInput = screen.getByRole('textbox', { name: /lastName/ })

    await userEvent.type(firstNameInput, 'John')
    await userEvent.type(secondNameInput, 'Doe')
    expect(nextButton).not.toHaveAttribute('disabled')


    // Go to the 'Overview' page
    await userEvent.click(nextButton)
    expect(screen.getByText(/email@test.com/)).toBeInTheDocument()
    expect(screen.getByText(/20/)).toBeInTheDocument()
    expect(screen.getByText(/John/)).toBeInTheDocument()

    const purchaseLink = screen.getByText('Purchase')
    expect(purchaseLink).toBeInTheDocument()
  })
})
