import { createSelector } from 'reselect'

// This is a input selector
const selectCart = state => state.cart // takes the whole state and returns a slice of it

export const selectCartItems = createSelector(
  [selectCart], // collection of input selectors
  (cart) => cart.cartItems // function that will return tha value we want out of this selector
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity,
    0
  )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
)
