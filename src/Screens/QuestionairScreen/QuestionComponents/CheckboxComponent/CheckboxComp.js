import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {FlatList} from 'react-native';
import ApiManager from '../../../../API/Api';
import SkipButton from '../../../../Components/CustomButton/SkipButton';
import RadioCompType1 from '../RadioComponent/RadioCompType1';
import NumberInputComp from '../InputComponent/NumberInputComp';
import TextInputComp from '../InputComponent/TextInputComp';
import RadioCompType2 from '../RadioComponent/RadioCompType2';
import DropdownInputComp from '../DropdownInputComponent/DropdownInputComp';
import RadioCompType3 from '../RadioComponent/RadioCompType3';
import RadioCompType4 from '../RadioComponent/RadioCompType4';
import RadioCompType5 from '../RadioComponent/RadioCompType5';
import RadioCompType6 from '../RadioComponent/RadioCompType6';
import RadioCompType7 from '../RadioComponent/RadioCompType7';
import RadioCompType8 from '../RadioComponent/RadioCompType8';
import RadioCompType9 from '../RadioComponent/RadioCompType9';
import TextAreaComp from '../TextAreaComponent/TextAreaComp';
import RangeSelectComp from '../RangeSelectComponent/RangeSelectComp';
import {useDispatch} from 'react-redux';
import CountryComponent from '../CountryComponent/CountryComponent';
import {AnswerDataFunction} from '../../../../Redux/Reducers/OptionIDData';

const CheckboxComp = ({APIresponse, answerResponse, postQuestionIdAPI}) => {
  const dispatch = useDispatch();

  const [quesResponse, setQuesResponse] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [nextcomp, setNextComp] = useState(false);
  const [count, setCount] = useState('');

  const [questionIndex, setquestionIndex] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState('');

  // Post Multi Question Id Api
  const postMultiQuestionIdAPI = (question_id, answer_id) => {
    const params = {
      question_id: question_id,
      answer_id: answer_id ? answer_id : '',
    };

    ApiManager.postQuestionsId(params)
      .then(res => {
        const questionResponse = res?.data?.questions;
        setQuesResponse(questionResponse);
        setcurrentQuestion(questionResponse[0]);
        setCount(questionResponse[0]?.question_type);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const NextFunction = () => {
    dispatch(
      AnswerDataFunction({
        question_id: APIresponse[0]?.id,
        answerID: selectedIds ?? '',
        inputData: '',
      }),
    );
    postMultiQuestionIdAPI(APIresponse[0]?.next_question_id, selectedIds);
    setNextComp(true);
  };

  const SkipFunction = () => {
    postQuestionIdAPI(62, 0);
  };

  const handleNext = answer => {};

  const changeIndex = (question_id, answer_id) => {
    let newQuestion = '';
    let index = questionIndex + 1;
    newQuestion = quesResponse[index] && quesResponse[index];

    if (newQuestion) {
      setcurrentQuestion(newQuestion);
      setquestionIndex(index);
    } else {
      postQuestionIdAPI(62, 0);
    }
  };

  const renderComponents = item => {
    switch (item?.question_type) {
      case 'radio1':
        return (
          <RadioCompType1
            count={count}
            setCount={setCount}
            responseArray={[item]}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );
      case 'numberInput':
        return (
          <NumberInputComp
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'textInput':
        return (
          <TextInputComp
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'radio2':
        return (
          <RadioCompType2
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );
      case 'dropdown input':
        return (
          <DropdownInputComp
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={item?.answers}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'radio3':
        return (
          <RadioCompType3
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={item?.answers}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'radio4':
        return (
          <RadioCompType4
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'radio5':
        return (
          <RadioCompType5
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'radio6':
        return (
          <RadioCompType6
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );
      case 'radio7':
        return (
          <RadioCompType7
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={item?.answers}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );
      case 'radio8':
        return (
          <RadioCompType8
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={item?.answers}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );
      case 'radio9':
        return (
          <RadioCompType9
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={item?.answers}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'textarea':
        return (
          <TextAreaComp
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'range':
        return (
          <RangeSelectComp
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );

      case 'country':
        return (
          <CountryComponent
            count={count}
            setCount={setCount}
            APIresponse={[item]}
            answerResponse={[item?.answers]}
            handleNext={handleNext}
            NextBtn={quesResponse[0]?.nextButton}
            postQuestionIdAPI={(question_id, answer_id) =>
              changeIndex(question_id, answer_id)
            }
          />
        );
    }
  };

  const StoreIdsFunction = id => {
    setSelectedIds(prevSelectedIds => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter(itemId => itemId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };

  const ShowOptionsFunction = ({item}) => {
    const isSelected = selectedIds.includes(item?.answer_id);

    return (
      <TouchableOpacity
        onPress={() => StoreIdsFunction(item?.answer_id)}
        isSelected={selectedIds === item?.answer_id}
        style={{width: WIDTH(45), flexDirection: 'row', gap: 7}}>
        <MaterialCommunityIcons
          name={
            isSelected
              ? 'checkbox-marked-circle-outline'
              : 'checkbox-blank-circle-outline'
          }
          size={20}
          style={{fontWeight: isSelected ? '500' : '300'}}
          color={isSelected ? '#885F08' : '#fff'}
        />

        <Text style={isSelected ? styles.optionTxtClrChng : styles.optionTxt}>
          {item?.answer_text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {nextcomp ? (
        renderComponents(currentQuestion)
      ) : (
        <View style={{marginHorizontal: 22}}>
          <View style={{marginTop: HEIGHT(5)}}>
            <Text style={styles.mainTitle}>
              {APIresponse[0]?.question_text}
            </Text>
          </View>
          <View style={styles.flatlistView}>
            <FlatList
              data={answerResponse}
              key={item => item?.answer_id}
              renderItem={({item}) => <ShowOptionsFunction item={item} />}
              numColumns={2}
            />
          </View>
          <View style={styles.button}>
            {selectedIds.length > 0 ? (
              <CustomButton btnText="Next" onpress={() => NextFunction()} />
            ) : (
              <SkipButton btnText="Skip" onpress={() => SkipFunction()} />
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default CheckboxComp;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  flatlistView: {
    marginTop: HEIGHT(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  optionTxt: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },

  optionTxtClrChng: {
    color: '#885F08',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: HEIGHT(78),
    gap: 10,
  },
});
