import React from 'react' // eslint-disable-line no-unused-vars
import { ListGroup, Card } from 'react-bootstrap' // eslint-disable-line no-unused-vars
import PokemonItem from './PokemonItem'
import { SessionContext } from '../App'

function MyPokemons () {
  const { state } = React.useContext(SessionContext)

  return (
    <>
      <Card>
        <Card.Header>Pokemons</Card.Header>
        <Card.Body>
          <Card.Title>My purchased pokemons</Card.Title>
          <ListGroup>
            {state.myPokemons.map((pokemon, i) => <PokemonItem key={`${Date.now()}-${i}`} pokemon={pokemon} />)}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default MyPokemons
