import {createAsyncThunk} from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/getUsers', (_, thunkAPI) => {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(item => item.json())
    .catch(e => console.log('Unexpected Error'));
});
