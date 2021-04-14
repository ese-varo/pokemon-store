import React from 'react' // eslint-disable-line no-unused-vars
import Header from './components/Header'
import Content from './components/Content'
import sessionReducer from './reducer'

export const SessionContext = React.createContext({
  cartTotal: 0,
  myPokemons: [],
  cartPokemons: []
})

function App () {
  const initialSessionState = React.useContext(SessionContext)
  const [state, dispatch] = React.useReducer(sessionReducer, initialSessionState)

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      <Header />
      <div className='container'>
        <Content />
      </div>
    </SessionContext.Provider>
  )
}

export default App
