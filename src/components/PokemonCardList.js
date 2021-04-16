import React from 'react' // eslint-disable-line no-unused-vars
import PokemonCard from './PokemonCard'

const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/'
const endpoint = '?limit=130'

function PokemonCardList () {
  const [pokemons, setPokemons] = React.useState(null) // eslint-disable-line no-unused-vars

  React.useEffect(() => {
    async function getPokemons() {
      const response = await fetch(`${pokemonsUrl}${endpoint}`)
      const data = await response.json()
      setPokemons(data.results)
    }
    getPokemons()
  }, [])

  if (!pokemons) return <p>loading...</p>
  return (
    <div className='row'>
      {pokemons.map((pokemon) => <PokemonCard key={`${Date.now}-${pokemon.name}`} url={pokemon.url} />)}
    </div>
  )
}

export default PokemonCardList
