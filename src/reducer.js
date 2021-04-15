function sessionReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItem = action.payload.cartItem
      return { ...state, cartPokemons: [newItem, ...state.cartPokemons] }
    }
    case 'REMOVE_FROM_CART': {
      const removedItemId = action.payload.id
      return { 
        ...state,
        cartPokemons: state.cartPokemons.filter(pokemon => pokemon.id !== removedItemId)
      }
    }
    default:
      return state
  }
}

export default sessionReducer
