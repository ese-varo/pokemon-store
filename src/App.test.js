import React from 'react'
import ReactDOM from 'react-dom'
import sessionReducer from './reducer'
import { render, cleanup } from '@testing-library/react'
import App, { SessionContext } from './App'
import Header from './components/Header'
import '@testing-library/jest-dom/extend-expect'

const renderWithContext = (
  component) => {
  return {
    ...render(
      <App value={SessionContext}>
          {component}
      </App>)
  }
}

afterEach(cleanup)

it('checks if initial cart items counter state is equal to 0', () => {
  const { getByTestId } = renderWithContext(<Header />)
  expect(getByTestId('cart-counter')).toHaveTextContent('0')
})

it('should take a snapshot', () => {
  const { asFragment } = render(<App />)

  expect(asFragment(<App />)).toMatchSnapshot()
})

describe('test the reducer and actions', () => {
  xit('should return the initial state', () => {
    expect(sessionReducer({ type: '' })).toEqual({ cartTotal: 0, cartCounter: 0, myPokemons: [], cartPokemons: [] })
  })
})
