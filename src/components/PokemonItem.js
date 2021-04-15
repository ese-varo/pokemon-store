import React from 'react' // eslint-disable-line no-unused-vars
import { ListGroup, Card, Button } from 'react-bootstrap' // eslint-disable-line no-unused-vars
import { SessionContext } from '../App'

function PokemonItem ({ pokemon }) {
  const { dispatch } = React.useContext(SessionContext)

  function handleRemoveItem() {
    const id = pokemon.id
    dispatch({ type: 'REMOVE_FROM_MY_POKEMONS', payload: { id } })
  }

  return (
    <>
      <ListGroup.Item className='d-flex cart-item'>
        <span>{pokemon.name}</span>
        <Button variant='danger'
          onClick={handleRemoveItem}
          className='btn-sm'
        >Remove</Button>
      </ListGroup.Item>
    </>
  )
}

export default PokemonItem
