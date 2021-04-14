import React from 'react' // eslint-disable-line no-unused-vars
import PokemonType from './PokemonType'

function PokemonCard({ imageUrl, name, types, id }) {
  return (
    <>
      <div className='col-sm'>
        <div className='card mt-4'>
          <img
            src={imageUrl}
            alt='Pokemon cover'
            className='card-img-top'
          />
          <div className='card-body text-center'>
            <h5 className='card-title'>{name}</h5>
            <div className='card-text text-center'>
              <p><span className='text-muted'>Price:</span> ${id}</p>
            </div>
            <div className='card-header'>Types</div>
            <ul className='list-group list-group-flush'>
              {types.map((type, i) => <PokemonType key={i} type={type} />)}
              <li className='list-group-item'>
                <button className='btn btn-primary btn-sm'>Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCard
