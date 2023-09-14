// import rootReducer from "./reducers";
// import {createStore} from 'redux'

// const store = createStore(rootReducer)

// export default store;

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage method

import rootReducer from './reducers';

// Redux Persist configuration
const persistConfig = {
  key: 'root', // Key for storing data in storage
  storage, // Choose the storage method (localStorage or AsyncStorage)
  // Add more configuration options if needed
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Create a persisted store with the original store
const persistor = persistStore(store);

export { store, persistor };