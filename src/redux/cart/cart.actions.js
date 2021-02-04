import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  // payload is optional property in action object
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
