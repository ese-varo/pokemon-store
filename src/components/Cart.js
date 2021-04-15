import React from 'react' // eslint-disable-line no-unused-vars
import { ListGroup, Card, Button } from 'react-bootstrap' // eslint-disable-line no-unused-vars
import CartItem from './CartItem'
import { SessionContext } from '../App'
import StripeCheckout from 'react-stripe-checkout'

function Cart () {
  const { state, dispatch } = React.useContext(SessionContext)

  function handleToken(token, addresses) { // eslint-disable-line no-unused-vars
    // handle paying process
    handlePurchasePokemons()
  }

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
          <p className='mt-3'><span className='text-muted'>Total: </span>${state.cartTotal}</p>
          <p className='mt-3'><span data-testid='quantity' className='text-muted'>Quantity: </span>{state.cartCounter}</p>
          {state.cartCounter ? (
            <StripeCheckout 
              stripeKey={process.env.REACT_APP_STRIPE_SECRET}
              token={handleToken}
            />
          ) : (
            <StripeCheckout 
              disabled={true}
              stripeKey={process.env.REACT_APP_STRIPE_SECRET}
              token={handleToken}
            />
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default Cart
