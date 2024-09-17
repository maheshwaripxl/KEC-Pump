import {
  Animated,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CardDetails} from '../../Array/Array';
import {styles} from './style';

import Paginator from '../../Components/Pagination/Paginator';
import {HEIGHT, WIDTH} from '../../Config/AppConst';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header/Header';

const Card = () => {
  const slides = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexIncrease, setIndexIncrease] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const cardDetailFunction = ({item}) => {
    const handleSkip = () => {
      setIndexIncrease(indexIncrease + 1);
      navigation.navigate('questionmainscreen');
    };

    return (
      <View style={styles.listView}>
        <Text style={styles.step}>{item.step}</Text>

        <Text style={styles.heading}>{item.heading}</Text>

        <View style={styles.cardView}>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>

        <View style={{marginTop: HEIGHT(8)}}>
          {indexIncrease < 3 ? (
            <CustomButton btnText="Next" onpress={handleSkip} />
          ) : (
            <CustomButton btnText="Start" onpress={handleSkip} />
          )}
        </View>
      </View>
    );
  };

  return (
    // <LinearGradient
    //   colors={['#000F28', '#0071C1', '#FF8A00']}
    //   // locations={[.2,0.6,0.9]}
    //   useAngle={true}
    //   angle={45}
    //   angleCenter={{x: 0.7, y: 0.5}}
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 1}}>
    <ImageBackground source={require('../../Images/background.png')}>
      <Header />
      <View style={[styles.container, {width: WIDTH}]}>
        <FlatList
          data={CardDetails}
          renderItem={({item}) => cardDetailFunction({item})}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          // bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slides}
          viewabilityConfig={viewConfig}
        />
      </View>

      <View style={{position: 'absolute', top: HEIGHT(73), left: WIDTH(41)}}>
        <Paginator data={CardDetails} scrollX={scrollX} />
      </View>
    </ImageBackground>
  );
};

export default Card;
