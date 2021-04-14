import React from 'react' // eslint-disable-line no-unused-vars
import PokemonCard from './PokemonCard'

const pokemonBaseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const imageBaseUrl = 'https://pokeres.bastionbot.org/images/pokemon/'

function PokemonCardList () {
  const [pokemon, setPokemon] = React.useState(null)

  React.useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`${pokemonBaseUrl}43/`)
      const data = await response.json()
      setPokemon(getPokemonData(data))
    }
    getPokemon()
  }, [])

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
    <PokemonCard
      imageUrl={`${imageBaseUrl}${pokemon.id}.png`}
      name={pokemon.name}
      types={pokemon.types}
      id={pokemon.id}
    />
  ) : (
    <p>loading</p>
  )
}

export default PokemonCardList
