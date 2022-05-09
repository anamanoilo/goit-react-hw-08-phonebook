import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createReducer } from '@reduxjs/toolkit';
import phonebookApi from 'services/phonebookApi';
import { createAction } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
// import contactsReducer from './contacts-async-slice';

export const changeFilter = createAction('filter/change');

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token'],
};

const rootReducer = combineReducers({
  filter: filterReducer,
  [phonebookApi.reducerPath]: phonebookApi.reducer,
  // contacts: contactsReducer.reducer,
  auth: persistReducer(persistConfig, authSlice.reducer),
});

export default rootReducer;
