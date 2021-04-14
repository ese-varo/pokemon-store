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
        <h1>Pokemon Store</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >

          <Tab eventKey="pokemon-list" title="Home">
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
