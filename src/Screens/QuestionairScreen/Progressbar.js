import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HEIGHT} from '../../Config/AppConst';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Progressbar = ({progress}) => {
  const barWidth = Dimensions.get('screen').width - 44;
  const barHeight = HEIGHT(1.6);
  const progressCustomStyles = {
    borderRadius: 16,
    borderColor: '#fff',
  };

  return (
    <View style={{marginTop: HEIGHT(2)}}>
      <View>
        <ProgressBarAnimated
          width={barWidth}
          height={barHeight}
          value={progress} // Setting the progress value
          backgroundColor="#0071C1" // Adding a background color for better visibility
          {...progressCustomStyles}
        />
        <Text
          style={{
            position: 'absolute',
            end: 4,
            fontSize: 16,
            color: 'white',
          }}></Text>
      </View>
    </View>
  );
};

export default Progressbar;

const styles = StyleSheet.create({});
