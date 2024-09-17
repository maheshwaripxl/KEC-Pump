import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import {
    DM_sans_Bold,
    FONTSIZE,
    HEIGHT,
    WIDTH,
} from '../../../../Config/AppConst'
import { Dropdown } from 'react-native-element-dropdown';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import { useSelector } from 'react-redux';

const DropdownInputComp = ({
    count,
    setCount,
    getProgress,
    APIresponse,
    postQuestionIdAPI,
}) => {

    const selector = useSelector((state) => state.AnswerData);
    console.log('selector', selector?.answerID);

    const [value1, setValue1] = useState(null);

    const buttonFunction = () => {
        getProgress();
        setCount(7);
        getProgress();
        postQuestionIdAPI(6)

    };

    const data1 = [
        { label: 'mPa.s(cP)', value: '1' },
        { label: 'mm2/sec(cSt)', value: '2' },
    ];

    const data2 = [
        { label: 'm3/h', value: '1' },
        { label: 'I/min (dm3/h)', value: '2' },
        { label: 'gal/min (US)', value: '3' },
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: '#fff', position: 'absolute', right: 1 }}>
                    {count}/15
                </Text>

                <View style={{ marginTop: HEIGHT(10) }}>
                    <View>
                        <Text style={styles.mainTitle}>
                            {APIresponse?.question?.question_text}
                        </Text>
                    </View>

                    <View style={styles.viewWrapper}>
                        <View style={styles.inputView}>
                            <Dropdown
                                data={data1}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                iconColor="#fff"
                                style={styles.dropdown}
                                containerStyle={styles.dropdownContainer1}
                                itemTextStyle={styles.itemText}
                                value={value1}
                                onChange={item => {
                                    setValue1(item.value)
                                }}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholder="mPa.s(cP)"
                                placeholderStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#fff'}
                            />
                            <TextInput style={styles.input} />
                        </View>
                        <TouchableOpacity style={styles.circle}>
                            <Text style={{ color: '#fff' }}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.circle}>
                            <Text style={{ color: '#fff' }}>--</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <CustomButton
                            btnText="GO TO PUMP CAPACITY"
                            onpress={buttonFunction}
                        />
                    </View>
                </View>

            </View>
        </View>
    );
};

export default DropdownInputComp;

const styles = StyleSheet.create({

    mainTitle: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        fontFamily: DM_sans_Bold,
    },

    viewWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 48,
    },

    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 0,
        height: 50,
        width: WIDTH(50),
        borderColor: '#fff',
        borderRadius: 10,
    },

    dropdown: {
        borderColor: '#fff',
        fontSize: FONTSIZE(1.2),
        color: '#fff',
        width: WIDTH(22),
        paddingLeft: 3,
        height: 47,
        paddingRight: 3,
        borderRadius: 10,
    },

    dropdownContainer1: {
        width: 135,
    },

    dropdownContainer2: {
        width: 135,
        height: 170,
    },

    itemText: {
        fontSize: 14,
    },

    input: {
        width: WIDTH(30),
        color: '#fff',
    },

    selectedTextStyle: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: FONTSIZE(1.4),
        paddingLeft: 3,
    },

    circle: {
        borderWidth: 1,
        padding: 0,
        height: 50,
        width: 50,
        borderColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        position: 'absolute',
        top: HEIGHT(67),
    },

});
