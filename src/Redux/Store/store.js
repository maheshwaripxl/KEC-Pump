import {configureStore} from '@reduxjs/toolkit';
import AnswerData from '../Reducers/OptionIDData';
import APIData from '../Reducers/APIDataReducer';

const store = configureStore({
  reducer: {
    AnswerData,
    APIData,
  },
});

export default store;
