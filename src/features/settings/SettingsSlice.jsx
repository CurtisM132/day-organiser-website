import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    setSettingsDialogOpen(state, action) {
      if (typeof action.payload === 'boolean') {
        return {
          ...state,
          open: action.payload,
        };
      }
      return state;
    },
  },
});

export const { setSettingsDialogOpen } = settingsSlice.actions;

export default settingsSlice.reducer;
