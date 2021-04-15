import React from 'react' // eslint-disable-line no-unused-vars
import { ListGroup, Card, Button } from 'react-bootstrap' // eslint-disable-line no-unused-vars
import CartItem from './CartItem'
import { SessionContext } from '../App'

function Cart () {
  const { state, dispatch } = React.useContext(SessionContext)

  function handlePurchasePokemons() {
    dispatch({ type: 'PURCHASE_POKEMONS' })
  }

  return (
    <>
      <Card>
        <Card.Header>My shoping cart</Card.Header>
        <Card.Body>
          <Card.Title>Pokemons</Card.Title>
          <ListGroup className='cart-list'>
            {state.cartPokemons.map((pokemon, i) => <CartItem key={`${Date.now()}-${i}`} pokemon={pokemon} />)}
          </ListGroup>
          <Button variant='primary' onClick={handlePurchasePokemons} className='mt-3'>Purchase</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Cart
