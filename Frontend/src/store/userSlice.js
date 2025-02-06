import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username') || null,
  isAuthenticated: !!localStorage.getItem('username'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.username = null;
      state.isAuthenticated = false;
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;