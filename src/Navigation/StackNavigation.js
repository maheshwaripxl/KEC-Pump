import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SwiperScreen from '../Screens/Swiper/SwiperScreen';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import QuestionmainScreen from '../Screens/QuestionairScreen/QuestionmainScreen';
import ContactInformation from '../Screens/ContactForm/ContactInformation';
import ThankYouScreen from '../Screens/ThankYouScreen/ThankYouScreen';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashscreen"
        screenOptions={{
          headerShown: false,
          customAnimationOnGesture: true,
          animation: 'fade_from_bottom',
          animationDuration: '400',
        }}>
        <Stack.Screen name="splashscreen" component={SplashScreen} />
        <Stack.Screen name="swiperscreen" component={SwiperScreen} />
        <Stack.Screen
          name="questionmainscreen"
          component={QuestionmainScreen}
        />

        {/* <Stack.Screen name="mainquestion4" component={MainQuestion4} />
        <Stack.Screen name="mainquestion5" component={MainQuestion5} />
        <Stack.Screen name="mainquestion6" component={MainQuestion6} />
        <Stack.Screen name="mainquestion7" component={MainQuestion7} />
        <Stack.Screen name="mainquestion8" component={MainQuestion8} />
        <Stack.Screen name="mainquestion9" component={MainQuestion9} />
        <Stack.Screen name="mainquestion10" component={MainQuestion10} /> */}

        <Stack.Screen
          name="contactInformation"
          component={ContactInformation}
        />
        <Stack.Screen name="thankyouscreen" component={ThankYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
