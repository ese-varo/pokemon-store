import React from 'react' // eslint-disable-line no-unused-vars
import PokemonCardList from './components/PokemonCardList'
import Header from './components/Header'

function App () {
  return (
    <>
      <Header />
      <div className='container'>
        <PokemonCardList />
      </div>
    </>
  )
}

export default App
