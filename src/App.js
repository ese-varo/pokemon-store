import React from 'react' // eslint-disable-line no-unused-vars
import Header from './components/Header'
import Content from './components/Content'

function App () {
  return (
    <>
      <Header />
      <div className='container'>
        <Content />
      </div>
    </>
  )
}

export default App
