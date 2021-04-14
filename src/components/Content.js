import React from 'react' // eslint-disable-line no-unused-vars
import PokemonCardList from './PokemonCardList'
import Cart from './Cart'
import MyPokemons from './MyPokemons'
import { Tabs, Tab }from 'react-bootstrap' // eslint-disable-line no-unused-vars

function Content () {
  const [key, setKey] = React.useState('pokemon-list')

  return (
    <>
      <div className="container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className='mb-3'
        >

          <Tab eventKey="pokemon-list" title="Pokemon List">
            <PokemonCardList />
          </Tab>

          <Tab eventKey="my-pokemons" title="My pokemons">
            <MyPokemons />
          </Tab>

          <Tab eventKey="cart" title="Cart">
            <Cart />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default Content
