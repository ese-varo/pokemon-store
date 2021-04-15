import React from 'react' // eslint-disable-line no-unused-vars
import { ListGroup } from 'react-bootstrap' // eslint-disable-line no-unused-vars
import PokemonItem from './PokemonItem'
import { SessionContext } from '../App'

function MyPokemons () {
  const { state } = React.useContext(SessionContext)

  return (
    <>
      <h3>My purchased pokemons list</h3>
      <ListGroup>
        {state.myPokemons.map((pokemon, i) => <PokemonItem key={`${Date.now()}-${i}`} pokemon={pokemon} />)}
      </ListGroup>
    </>
  )
}

export default MyPokemons
