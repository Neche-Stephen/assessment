import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './authSlice';  
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// Config for redux-persist
const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['auth'], 
};


const rootReducer = combineReducers({
  auth: authReducer,  
  users: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
export const persistor = persistStore(store);

export default store;
