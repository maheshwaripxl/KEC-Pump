import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import React, { useState } from 'react';

const BackButton = ({APIresponse}) => {
    console.log('APIresponse={APIresponse}', APIresponse[0]?.previous_id);
    const [prevId, setPrevId] = useState(null);
    
  return (
    <TouchableOpacity style={styles.backBtn} onPress={() => setPrevId(APIresponse[0]?.previous_id)}>
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
