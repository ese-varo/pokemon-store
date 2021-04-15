import React from 'react' // eslint-disable-line no-unused-vars
import PokemonCard from './PokemonCard'

const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/'
const endpoint = '?limit=50'

function PokemonCardList () {
  const [pokemons, setPokemons] = React.useState(null) // eslint-disable-line no-unused-vars

  React.useEffect(() => {
    async function getPokemons() {
      const response = await fetch(`${pokemonsUrl}${endpoint}`)
      const data = await response.json()
      setPokemons(data)
    }
    getPokemons()
  }, [])

  return pokemons ? (
    <div className='row'>
      {pokemons.results.map((pokemon) => <PokemonCard key={`${Date.now}-${pokemon.name}`} url={pokemon.url} />)}
    </div>
  ) : (
    <p>loading</p>
  )
}

export default PokemonCardList
