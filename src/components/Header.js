import React from 'react' // eslint-disable-line no-unused-vars
import { SessionContext } from '../App'

function Header () {
  const { state } = React.useContext(SessionContext)

  return (
    <nav className='navbar sticky-top navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Pokemon Store</a>
        <div className='d-flex'>
          {state.cartCounter ? (
            <span className='cart-items-counter badge badge-danger'>
              Cart <span className='badge badge-pill badge-dark'>{state.cartCounter}</span>
            </span>
          ) : ('')}
        </div>
      </div>
    </nav>
  )
}

export default Header
