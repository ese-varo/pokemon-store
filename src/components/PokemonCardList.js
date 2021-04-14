import React from 'react' // eslint-disable-line no-unused-vars
import PokemonCard from './PokemonCard'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/1/'

function PokemonCardList () {
  const [pokemon, setPokemon] = React.useState(null)

  React.useEffect(() => {
    async function getPokemon() {
      const response = await fetch(baseUrl)
      const data = await response.json()
      setPokemon(data)
    }
    getPokemon()
  }, [])

  return pokemon ? (
    <PokemonCard
      imageUrl='https://pokeres.bastionbot.org/images/pokemon/1.png'
      name={pokemon.name}
      types={['poison', 'grass']}
      id='10'
    />
  ) : (
    <p>loading</p>
  )
}

export default PokemonCardList
