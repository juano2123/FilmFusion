// src/features/idSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const idSlice = createSlice({
  name: 'id',
  initialState: {
    value: null,
  },
  reducers: {
    setId: (state, action) => {
      if (state.value === null) {
        state.value = action.payload;
      }
    },
  },
});

export const { setId } = idSlice.actions;

export default idSlice.reducer;
