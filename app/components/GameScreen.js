import React from 'react';
import {View} from 'react-native';
import Background from './Background';
import QandA from './QandA';

function GameScreen() {
  return (
    //anim's background is determined in <background>
    <>
      <Background />
      <View
        style={{
          flex: 1,
          paddingTop: '10%',
          height: '100%',
          alignItems: 'center',
        }}>
        <QandA />
      </View>
    </>
  );
}

export default GameScreen;
