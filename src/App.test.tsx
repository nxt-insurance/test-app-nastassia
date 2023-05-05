import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders developer insurance', () => {
  render(<App />)
  const linkElement = screen.getByText('Get developer insurance')
  expect(linkElement).toBeInTheDocument()
})
