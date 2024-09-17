import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const APIData = createSlice({
  name: 'apidata',
  initialState,
  reducers: {
    APIDataFunction(state, action) {
      return {
        data: action.payload.data,
      };
    },
  },
});

export const {APIDataFunction} = APIData.actions;
export default APIData.reducer;
