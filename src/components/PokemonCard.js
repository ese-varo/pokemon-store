import React from 'react' // eslint-disable-line no-unused-vars

function PokemonCard({ imageUrl, name, types, id }) { // eslint-disable-line react/prop-types
  return (
    <>
      <p>Pokemon card</p>
      <img
        style={{ height: 100, width: 200, objectFit: 'cover' }}
        src={imageUrl}
        alt='Pokemon cover'
      />
      <p>{name}</p>
      <p>{id}</p>
      <p>- {types[0]}</p>
      <p>- {types[1]}</p>
    </>
  )
}

export default PokemonCard
