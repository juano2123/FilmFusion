import { configureStore } from '@reduxjs/toolkit';
import idReducer from './features/idSlice';

export const store = configureStore({
  reducer: {
    id: idReducer,
  },
});