import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import COLOR from '../../../../Config/color.json';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { DM_sans_Bold, HEIGHT, WIDTH } from '../../../../Config/AppConst';

const InputComp = ({
    count,
    setCount,
    getProgress,
    APIresponse,
    postQuestionIdAPI,
}) => {
    const buttonFunction = () => {
        setCount(count + 1);
        getProgress();
        postQuestionIdAPI(APIresponse?.question?.next_question_id);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 30 }}>
                <Text style={{ color: '#fff', position: 'absolute', right: 1 }}>
                    {count}/15
                </Text>
                <View style={{ marginTop: HEIGHT(20) }}>
                    <View>
                        <Text style={styles.title1}>
                            {APIresponse?.question?.question_text}
                        </Text>
                    </View>

                    <View style={styles.inputView}>
                        <TextInput placeholderTextColor={'#fff'} style={styles.input} />
                    </View>

                    <View style={styles.button}>
                        <CustomButton
                            btnText={APIresponse?.question?.button}
                            onpress={buttonFunction}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InputComp;

const styles = StyleSheet.create({
    title1: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        fontFamily: DM_sans_Bold,
    },

    inputView: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 9,
        marginTop: HEIGHT(5),
        borderRadius: 5,
    },

    input: {
        width: WIDTH(80),
        color: COLOR.White,
    },

    button: {
        position: 'absolute',
        top: HEIGHT(57),
    },
});
