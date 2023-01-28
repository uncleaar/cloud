import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  user: Response | null;
  token: string | null;
}

const initialState: State = {
  user: null,
  token: null
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<Response>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    }
  }
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
