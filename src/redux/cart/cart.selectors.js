import { createSelector } from 'reselect'

// This is a input selector
const selectCart = state => state.cart // takes the whole state and returns a slice of it

export const selectCartItems = createSelector(
  [selectCart], // collection of input selectors
  (cart) => cart.cartItems // function that will return tha value we want out of this selector
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
    0
  )
)
