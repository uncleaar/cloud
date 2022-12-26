import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types';

interface State {
  user: User | null;
}

const initialState: State = {
  user: null
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
