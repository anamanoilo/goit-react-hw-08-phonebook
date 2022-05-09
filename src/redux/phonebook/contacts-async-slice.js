import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from './contacts-operations';
import { toast } from 'react-toastify';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: '',
    errorStatus: null,
    // getStatus: 'idle',
    // addStatus: 'idle',
    // deleteStatus: "idle",
  },
  extraReducers: {
    [getContacts.pending]: (state, _) => {
      state.loading = 'contacts';
      state.errorStatus = '';
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.loading = '';
    },
    [getContacts.rejected]: (state, _) => {
      state.contacts = [];
      state.loading = '';
    },
    [deleteContact.pending]: (state, _) => {
      state.loading = 'deleteBtn';
      state.errorStatus = '';
    },
    [deleteContact.fulfilled]: (state, _) => {
      state.loading = '';
    },

    [deleteContact.rejected]: (state, { payload }) => {
      state.loading = '';
      // state.errorStatus = payload;
      if (payload === '404') {
        toast.info('There are no contacts yet, please add a new contact');
      } else {
        toast.error('Oops, something went wrong, please try again');
      }
    },
    [addContact.pending]: (state, _) => {
      state.loading = 'addBtn';
      state.errorStatus = '';
    },

    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts = [payload, ...state.contacts];
      state.loading = '';
    },
    [addContact.rejected]: (state, { payload }) => {
      state.loading = '';
      state.errorStatus = payload;
    },
  },
});

export default contactsReducer;

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   contacts: contactsReducer.reducer,
// });
