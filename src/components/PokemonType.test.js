import React from 'react'
import { render, cleanup } from '@testing-library/react'
import PokemonType from './PokemonType'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('should equal to 0', () => {
  const type = 'water'
  const { getByTestId } = render(<PokemonType type={type} />);
  expect(getByTestId('type')).toHaveTextContent('water')
});
