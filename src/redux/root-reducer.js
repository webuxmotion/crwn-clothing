import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

export default persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['cart']
  },
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
  }),
);
