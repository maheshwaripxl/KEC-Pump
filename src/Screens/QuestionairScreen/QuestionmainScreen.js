import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Progressbar from './Progressbar';
import Header from '../../Components/Header/Header';
import ApiManager from '../../API/Api';
import {ActivityIndicator} from 'react-native-paper';
import RadioCompType1 from './QuestionComponents/RadioComponent/RadioCompType1';
import RadioCompType2 from './QuestionComponents/RadioComponent/RadioCompType2';
import RadioCompType3 from './QuestionComponents/RadioComponent/RadioCompType3';
import DropdownInputComp from './QuestionComponents/DropdownInputComponent/DropdownInputComp';
import RadioCompType4 from './QuestionComponents/RadioComponent/RadioCompType4';
import InputComp2 from './QuestionComponents/InputComponent/InputComp2';
import InputComp1 from './QuestionComponents/InputComponent/InputComp1';

const QuestionmainScreen = () => {
  const [count, setCount] = useState(1);
  const [progress, setprogress] = useState(6.66);
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState([]);
  const [answerResponse, setAnswerResponse] = useState([]);

  const updateProgress = () => {
    setprogress(progress >= 80 ? progress + 6.66 : progress + 6.66);
    // setCount(count + 1)
  };

  const postQuestionIdAPI = (question_id, answer_id) => {
    const params = {
      question_id: question_id,
      answer_id: answer_id ? answer_id : '',
    };

    ApiManager.postQuestionsId(params)
      .then(res => {
        const questionResponse = res?.data?.question;
        const answerResponses = res?.data?.answers;
        setResponse(questionResponse);
        setAnswerResponse(answerResponses);
        setLoader(false);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const renderComponents = () => {
    switch (count) {
      case 1:
        return (
          <RadioCompType1
            count={count}
            setCount={setCount}
            getProgress={updateProgress}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 2:
        return (
          <InputComp1
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
      case 3:
        return (
          <InputComp1
            count={count}
            setCount={setCount}
            loader={loader}
            getProgress={updateProgress}
            APIresponse={response}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 4:
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
      case 5:
        return (
          <DropdownInputComp
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

      case 6:
        return (
          <DropdownInputComp
            count={count}
            setCount={setCount}
            loader={loader}
            progress={progress}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 7:
        return (
          <DropdownInputComp
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
      case 8:
        return (
          <DropdownInputComp
            count={count}
            setCount={setCount}
            loader={loader}
            progress={progress}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 9:
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
      case 10:
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

      case 11:
        return (
          <InputComp2
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
      case 12:
        return (
          <DropdownInputComp
            count={count}
            setCount={setCount}
            loader={loader}
            progress={progress}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 13:
        return (
          <DropdownInputComp
            count={count}
            setCount={setCount}
            loader={loader}
            progress={progress}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 14:
        return (
          <DropdownInputComp
            count={count}
            setCount={setCount}
            loader={loader}
            progress={progress}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 15:
        return (
          <DropdownInputComp
            count={count}
            setCount={setCount}
            loader={loader}
            progress={progress}
            getProgress={updateProgress}
            APIresponse={response}
            answerResponse={answerResponse}
            postQuestionIdAPI={(question_id, answer_id) =>
              postQuestionIdAPI(question_id, answer_id)
            }
          />
        );
      case 16:
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
    }
  };

  return (
    <ImageBackground
      source={require('../../Images/background.png')}
      style={{flex: 1}}>
      <Header />
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
