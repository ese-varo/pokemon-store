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
          {state.myPokemons.length ? (
            <ListGroup>
              {state.myPokemons.map((pokemon, i) => <PokemonItem key={`${Date.now()}-${i}`} pokemon={pokemon} />)}
            </ListGroup>
          ) : <p data-testid='empty-list'>You haven&apos;t bought any pokemon yet</p>}
        </Card.Body>
      </Card>
    </>
  )
}

export default MyPokemons
