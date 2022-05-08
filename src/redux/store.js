import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from '../redux/filterSlice';
import {contactApi} from './contactSlice'

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware
  ]
});

setupListeners(store.dispatch);