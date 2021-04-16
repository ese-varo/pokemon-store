import React from 'react' // eslint-disable-line no-unused-vars

function PokemonType({ type }) {
  return <span data-testid='type' className={`badge bg-${type} type mb-1`}>{type}</span>
}

export default PokemonType
