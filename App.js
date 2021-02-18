import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Game from './app/index';
import {StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" hidden />
      <Game />
    </>
  );
};
export default App;
