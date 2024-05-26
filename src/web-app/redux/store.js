// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import idReducer from './features/idSlice';
import { setId } from './features/idSlice';

const initializeStore = () => {
  const store = configureStore({
    reducer: {
      id: idReducer,
    },
  });

  // Obtener ID de la URL al inicio
  const query = new URLSearchParams(window.location.search);
  const initialId = query.get('id');
  if (initialId) {
    store.dispatch(setId(initialId));
  }

  return store;
};

export const store = initializeStore();
