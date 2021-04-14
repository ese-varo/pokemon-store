import React from 'react' // eslint-disable-line no-unused-vars

function PokemonType({ type }) {
  return <span className={`badge bg-${type} type mb-1`}>{type}</span>
}

export default PokemonType
