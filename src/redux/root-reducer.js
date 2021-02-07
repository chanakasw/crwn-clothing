import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // telling redux-persist to use localStorage as my default storage

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // reducers to persist in an array
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)
