import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../services/users';

export interface User {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface UsersState {
  users: Array<User>;
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {},
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.map((user: User) => ({
        ...user,
        url: user.url.replace('via.placeholder', 'dummyimage'),
        thumbnailUrl: user.thumbnailUrl.replace(
          'via.placeholder',
          'dummyimage',
        ),
      }));
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = usersSlice.actions;

export default usersSlice.reducer;
