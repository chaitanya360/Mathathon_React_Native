import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimatedView from '../animations/AnimatedView';
import colors from '../config/colors';

function QuestionHolder({question, gameOver, mode}) {
  const GameOver = () => {
    return mode == 1 ? (
      <Text style={[styles.game_over, {fontSize: 20}]}>Wrong Answer</Text>
    ) : (
      <Text style={[styles.game_over, {fontSize: 20}]}>Time Out</Text>
    );
  };

  return (
    <View style={styles.container}>
      <AnimatedView
        change={question}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.question, {fontSize: gameOver ? 32 : 50}]}>
          {question}
        </Text>
        {gameOver && GameOver()}
      </AnimatedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
    borderColor: 'rgba(25,0,0,0)',
    borderWidth: 10,
    borderRadius: 150,
    opacity: 0.9,
  },
  game_over: {
    margin: 10,
    fontSize: 30,
    fontFamily: 'Andika-Regular',
    color: colors.medium,
    opacity: 1,
  },

  question: {
    color: colors.white,
    fontFamily: 'Andika-Regular',
    fontSize: 50,
    opacity: 1,
  },
});

export default QuestionHolder;
