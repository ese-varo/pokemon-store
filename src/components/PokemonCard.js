import React from 'react' // eslint-disable-line no-unused-vars
import PokemonType from './PokemonType'
import { SessionContext } from '../App'

const imageBaseUrl = 'https://pokeres.bastionbot.org/images/pokemon/'

function PokemonCard({ url }) {
  const [pokemon, setPokemon] = React.useState(null)
  const { dispatch } = React.useContext(SessionContext)

  React.useEffect(() => {
    async function getPokemon() {
      const response = await fetch(url)
      const data = await response.json()
      setPokemon(getPokemonData(data))
    }
    getPokemon()
  }, [])

  function handleAddToCart() {
    const cartItem = { name: pokemon.name, id: `${Date.now()}-${pokemon.id}` }
    dispatch({ type: 'ADD_TO_CART', payload: { cartItem } })
  }

  function getPokemonData(data) {
    let pokemonData = data
    pokemonData.types = getTypes(pokemonData.types)
    return pokemonData
  }

  function getTypes(types) {
    let pokemonTypes = []
    types.forEach(type => {
      pokemonTypes.push(type['type']['name'])
    })
    return pokemonTypes
  }

  return pokemon ? (
    <>
      <div className='col mb-3 pokemon-card'>
        <div className='card h-100 text-center'>
          <img
            src={`${imageBaseUrl}${pokemon.id}.png`}
            alt='Pokemon cover'
            className='card-img-top'
          />
          <div className='card-body text-center pb-0 pt-2'>
            <h6 className='card-title'>{pokemon.name}</h6>
            <div className='card-text'>
              <p>
                <span className='text-muted'>Price:</span> <span className='badge badge-pill badge-info'>${pokemon.id}</span>
              </p>
            </div>
          </div>
          <div className='d-flex text-center types'>
            {pokemon.types.map((type, i) => <PokemonType key={i} type={type} />)}
          </div>
          <button
            className='btn btn-dark btn-sm mt-2'
            onClick={handleAddToCart}
          >Add to cart</button>
        </div>
      </div>
    </>
  ) : (
    <p>loading</p>
  )
}

export default PokemonCard
