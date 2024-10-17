import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  responses: [],
};

const AnswerData = createSlice({
  name: 'answerData',
  initialState,
  reducers: {
    AnswerDataFunction(state, action) {
      // Push new data (question_id, answerID, and inputData) into the array
      state.responses.push({
        question_id: action.payload.question_id,
        answerID: action.payload.answerID,
        inputData: action.payload.inputData,
      });
    },
  },
});

export const {AnswerDataFunction} = AnswerData.actions;
export default AnswerData.reducer;
