import React from 'react' // eslint-disable-line no-unused-vars
import PokemonType from './PokemonType'

function PokemonCard({ imageUrl, name, types, id }) {
  return (
    <>
      <div className='card'>
        <img
          style={{ height: 200, width: 200, objectFit: 'cover' }}
          src={imageUrl}
          alt='Pokemon cover'
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <div className='card-text'>
            <p>{id}</p>
            {types.map((type, i) => <PokemonType key={i} type={type} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCard
