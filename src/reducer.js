function sessionReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItem = action.payload.cartItem
      const price = action.payload.cartItem.price
      return {
        ...state,
        cartTotal: state.cartTotal + price,
        cartCounter: state.cartCounter + 1,
        cartPokemons: [newItem, ...state.cartPokemons]
      }
    }
    case 'REMOVE_FROM_CART': {
      const removedItemId = action.payload.id
      const price = state.cartPokemons.find(pokemon => pokemon.id == removedItemId).price
      return { 
        ...state,
        cartTotal: state.cartTotal - price,
        cartCounter: state.cartCounter - 1,
        cartPokemons: state.cartPokemons.filter(pokemon => pokemon.id !== removedItemId)
      }
    }
    case 'REMOVE_FROM_MY_POKEMONS': {
      const removedItemId = action.payload.id
      return { 
        ...state,
        myPokemons: state.myPokemons.filter(pokemon => pokemon.id !== removedItemId)
      }
    }
    case 'PURCHASE_POKEMONS': {
      return {
        cartTotal: 0,
        cartCounter: 0,
        myPokemons: [...state.cartPokemons, ...state.myPokemons],
        cartPokemons: []
      }
    }
    default:
      return state
  }
}

export default sessionReducer
