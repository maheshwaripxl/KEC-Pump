import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Progressbar from './Progressbar';
import Header from '../../Components/Header/Header';
import ApiManager from '../../API/Api';
import {ActivityIndicator} from 'react-native-paper';
import RadioCompType1 from './QuestionComponents/RadioComponent/RadioCompType1';
import RadioCompType2 from './QuestionComponents/RadioComponent/RadioCompType2';
import RadioCompType3 from './QuestionComponents/RadioComponent/RadioCompType3';
import RadioCompType4 from './QuestionComponents/RadioComponent/RadioCompType4';
import RadioCompType5 from './QuestionComponents/RadioComponent/RadioCompType5';
import RadioCompType6 from './QuestionComponents/RadioComponent/RadioCompType6';
import RadioCompType7 from './QuestionComponents/RadioComponent/RadioCompType7';
import RadioCompType8 from './QuestionComponents/RadioComponent/RadioCompType8';
import NumberInputComp from './QuestionComponents/InputComponent/NumberInputComp';
import TextInputComp from './QuestionComponents/InputComponent/TextInputComp';
import DropdownInputComp from './QuestionComponents/DropdownInputComponent/DropdownInputComp';
import RadioCompType9 from './QuestionComponents/RadioComponent/RadioCompType9';
import CheckboxComp from './QuestionComponents/CheckboxComponent/CheckboxComp';
import RangeSelectComp from './QuestionComponents/RangeSelectComponent/RangeSelectComp';
import TextAreaComp from './QuestionComponents/TextAreaComponent/TextAreaComp';
import CountryComponent from './QuestionComponents/CountryComponent/CountryComponent';

const QuestionmainScreen = () => {
  const [count, setCount] = useState('');
  const [loader, setLoader] = useState(true);
  const [progress, setprogress] = useState(6.66);
  const [response, setResponse] = useState([]);
  const [answerResponse, setAnswerResponse] = useState([]);
  const [getesponseArray, setgetResponseArray] = useState([]);

  useEffect(() => {
    QuestionsAPI();
  }, []);

  // Get 1st Question Api
  const QuestionsAPI = async () => {
    await ApiManager.get1stQuestion()
      .then(res => {
        if (res?.data?.status === 200) {
          const APIResponse = res?.data?.response;
          setgetResponseArray(APIResponse);
          setCount(APIResponse?.question_type);
          setLoader(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Post Question Id Api
  const postQuestionIdAPI = (question_id, answer_id) => {
    const params = {
      question_id: question_id,
      answer_id: answer_id ? answer_id : 0,
    };

    ApiManager.postQuestionsId(params)
      .then(res => {
        const questionResponse = res?.data?.question;
        const answerResponses = res?.data?.answers;
        setResponse(questionResponse);
        setAnswerResponse(answerResponses);
        setCount(questionResponse[0]?.question_type);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const updateProgress = () => {
    setprogress(progress >= 80 ? progress + 6.66 : progress + 6.66);
  };

  const renderComponents = () => {
    switch (count) {
      case 'radio1':
        return (
          <RadioCompType1
            count={count}
            setCount={setCount}
            getProgress={updateProgress}
            responseArray={getesponseArray}
            loader={loader}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 'numberInput':
        return (
          <NumberInputComp
            count={count}
            loader={loader}
            setCount={setCount}
            getProgress={updateProgress}
            APIresponse={response}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'textInput':
        return (
          <TextInputComp
            count={count}
            loader={loader}
            setCount={setCount}
            getProgress={updateProgress}
            APIresponse={response}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'radio2':
        return (
          <RadioCompType2
            count={count}
            loader={loader}
            setCount={setCount}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 'dropdown input':
        return (
          <DropdownInputComp
            count={count}
            loader={loader}
            setCount={setCount}
            progress={progress}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'radio3':
        return (
          <RadioCompType3
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'radio4':
        return (
          <RadioCompType4
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'radio5':
        return (
          <RadioCompType5
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'radio6':
        return (
          <RadioCompType6
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 'radio7':
        return (
          <RadioCompType7
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 'radio8':
        return (
          <RadioCompType8
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 'radio9':
        return (
          <RadioCompType9
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'cheakbox':
        return (
          <CheckboxComp
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'textarea':
        return (
          <TextAreaComp
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'range':
        return (
          <RangeSelectComp
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );

      case 'country':
        return (
          <CountryComponent
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
    }
  };

  return (
    <ImageBackground
      source={require('../../Images/background.png')}
      style={{flex: 1}}>
      <Header APIresponse={response} />
      <View style={{marginHorizontal: 20}}>
        <Progressbar
          progress={progress}
          count={count}
          selectedOption={'white'}
        />
      </View>

      {loader ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator theme={{colors: {primary: 'gray'}}} size="large" />
        </View>
      ) : (
        renderComponents()
      )}
    </ImageBackground>
  );
};

export default QuestionmainScreen;

const styles = StyleSheet.create({});
