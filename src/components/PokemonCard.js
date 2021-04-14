import React from 'react' // eslint-disable-line no-unused-vars
import PokemonType from './PokemonType'

function PokemonCard({ imageUrl, name, types, id }) {
  return (
    <>
      <p>Pokemon card</p>
      <img
        style={{ height: 200, width: 200, objectFit: 'cover' }}
        src={imageUrl}
        alt='Pokemon cover'
      />
      <p>{name}</p>
      <p>{id}</p>
      {types.map((type, i) => <PokemonType key={i} type={type} />)}
    </>
  )
}

export default PokemonCard
