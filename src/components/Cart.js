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
          <Card.Title>Pokemons to buy</Card.Title>
          <ListGroup className='cart-list'>
            {state.cartPokemons.map((pokemon, i) => <CartItem key={`${Date.now()}-${i}`} pokemon={pokemon} />)}
          </ListGroup>
          {state.cartCounter ? (
            <>
              <p className='mt-3'><span className='text-muted'>Total: </span>${state.cartTotal}</p>
              <p className='mt-3'><span className='text-muted'>Quantity: </span>{state.cartCounter}</p>
              <Button variant='primary' onClick={handlePurchasePokemons} className='mt-3'>Purchase</Button>
            </>
          ) : ''}
        </Card.Body>
      </Card>
    </>
  )
}

export default Cart
