import React from 'react' // eslint-disable-line no-unused-vars
import PokemonType from './PokemonType'

function PokemonCard({ imageUrl, name, types, id }) {
  return (
    <>
      <div className='col mb-3'>
        <div className='card h-100 text-center'>
          <img
            src={imageUrl}
            alt='Pokemon cover'
            className='card-img-top'
          />
          <div className='card-body text-center pb-0 pt-2'>
            <h5 className='card-title'>{name}</h5>
            <div className='card-text'>
              <p><span className='text-muted'>Price:</span> ${id}</p>
            </div>
          </div>
          <div className='d-flex text-center types'>
            {types.map((type, i) => <PokemonType key={i} type={type} />)}
          </div>
          <button className='btn btn-primary btn-sm mt-2'>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default PokemonCard
