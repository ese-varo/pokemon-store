import React from 'react' // eslint-disable-line no-unused-vars

function Header () {
  return (
    <nav className='navbar sticky-top navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Pokemon Store</a>
        <div className='d-flex'>
          <button id='cart-items-counter' className='btn btn-danger'>
            Cart <span className='badge bg-dark'>1</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
