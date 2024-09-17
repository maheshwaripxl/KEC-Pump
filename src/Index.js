import {LogBox, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import StackNavigation from './Navigation/StackNavigation';
import {PaperProvider} from 'react-native-paper';

const Index = () => {
  StatusBar.setHidden(true);

  console.disableYellowBox = true;

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  LogBox.ignoreLogs(['Warning: ...']);

  return (
    <PaperProvider>
      <StackNavigation />
    </PaperProvider>
  );
};

export default Index;

const styles = StyleSheet.create({});
