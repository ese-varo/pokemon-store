import React from 'react' // eslint-disable-line no-unused-vars
import { SessionContext } from '../App'

function Header () {
  const { state: { cartCounter } } = React.useContext(SessionContext)

  return (
    <nav className='navbar sticky-top navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Pokemon Store</a>
        <div className='d-flex'>
          {cartCounter ? (
            <span className='cart-items-counter badge badge-warning'>
              Cart items
              <span
                id='cart-counter-badge'
                data-testid='cart-counter'
                className='cart-number-counter badge badge-pill badge-info'>
                {cartCounter}
              </span>
            </span>
          ) : (
            <span className='cart-items-counter badge badge-danger'>
              Cart items
              <span
                id='cart-counter-badge'
                data-testid='cart-counter'
                className='cart-number-counter badge badge-pill badge-dark'>
                {cartCounter}
              </span>
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
