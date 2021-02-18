import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import storage from '../utility/storage';

function GameOverStats({
  score = 0,
  highScore = 0,
  onHomePressed,
  onRestartPressed,
  newHighScore = false,
}) {
  const storeHigh_score = async (value) => {
    await storage.store('high_score', value.toString());
  };
  if (newHighScore) {
    storeHigh_score(score);
  }

  return (
    <View style={styles.container}>
      <View style={styles.score_box}>
        <Text
          style={[
            styles.score,
            {color: score == 0 ? colors.danger : colors.primary},
          ]}>
          {' '}
          {score}{' '}
        </Text>
      </View>
      <View style={styles.high_score_box}>
        {newHighScore ? (
          <Text style={{fontSize: 18, color: colors.primary}}>
            New High Score
          </Text>
        ) : (
          <Text style={styles.high_score}> High Score: {highScore} </Text>
        )}
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button} onPress={onHomePressed}>
          <AntDesign name="home" size={40} color={colors.medium} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onRestartPressed}>
          <MaterialCommunityIcons
            name="restart"
            size={41}
            color={colors.medium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.98)',
    margin: 15,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'rgba(0,30,0,0.3)',
  },
  high_score_box: {
    alignItems: 'center',
  },

  high_score: {
    color: colors.medium,
    fontSize: 18,
    fontFamily: 'Andika-Regular',
  },

  score_box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  score: {
    fontSize: 28,
    fontFamily: 'Andika-Regular',
  },
});

export default GameOverStats;
