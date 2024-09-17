import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answerID: '',
  // answerIDforQues4: ''
};

const AnswerData = createSlice({
  name: 'answerData',
  initialState,
  reducers: {
    AnswerDataFunction(state, action) {
      return {
        answerID: action.payload.answerID,
        // answerIDforQues4: action.payload.answerIDforQues4
      };
    },
  },
});

export const { AnswerDataFunction } = AnswerData.actions;
export default AnswerData.reducer;
