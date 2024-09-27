import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {FlatList} from 'react-native';
import ApiManager from '../../../../API/Api';

const CheckboxComp = ({getProgress, APIresponse, answerResponse}) => {
  const [quesResponse, setQuesResponse] = useState([]);
  const [ansResponse, setAnsResponse] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Post Multi Question Id Api
  const postMultiQuestionIdAPI = (question_id, answer_id) => {
    const params = {
      question_id: question_id,
      answer_id: answer_id ? answer_id : '',
    };

    ApiManager.postQuestionsId(params)
      .then(res => {
        const questionResponse = res?.data?.answers;
        const answerResponses = res?.data?.answers?.answers;

        // setQuesResponse(questionResponse);
        // setAnsResponse(answerResponses)
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const buttonFunction = () => {
    postMultiQuestionIdAPI(APIresponse[0]?.next_question_id, selectedIds);
    getProgress();
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
        style={{width: WIDTH(50), flexDirection: 'row', gap: 7}}>
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
      <View style={{marginHorizontal: 30}}>
        <View style={{marginTop: HEIGHT(5)}}>
          <Text style={styles.mainTitle}>{APIresponse[0]?.question_text}</Text>
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
          <CustomButton
            btnText={APIresponse[0]?.button}
            onpress={() => buttonFunction()}
          />
        </View>
      </View>
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
