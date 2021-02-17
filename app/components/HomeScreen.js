import React from 'react';
import {
  StyleSheet,
  Text,
  Vibration,
  View,
  TouchableOpacity,
} from 'react-native';
import Settings from './Settings';
import colors from '../config/colors';
import {useContext} from 'react';
import {Context} from '../context/settingsContext';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import storage from '../utility/storage';
import LottieView from 'lottie-react-native';

function HomeScreen({navigation}) {
  const [highScore, setHighScore] = useState(0);
  const [settings] = useContext(Context);

  const getHighScore = async () => {
    const result = await storage.get('high_score');
    if (result) {
      setHighScore(parseInt(result));
    }
  };

  getHighScore();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title_shadow}>Mathathon</Text>
        <Text style={styles.title}>Mathathon</Text>
      </View>
      <LottieView
        style={styles.anim}
        source={require('../assets/anims/math')}
        autoPlay
        loop
      />
      <View style={styles.play_button}>
        <TouchableOpacity
          onPress={() => {
            console.log('this is being pressed');
            if (settings.vibration) Vibration.vibrate(50, false);
            navigation.navigate('game');
          }}>
          <Icon name="play-circle" size={130} color={colors.medium} />
        </TouchableOpacity>
        <Text style={styles.high_score}> Your Best: {highScore} </Text>
      </View>
      <View style={styles.settings_container}>
        <Settings />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  anim: {
    width: 500,
    height: 500,
    marginLeft: '4%',
    top: '5%',
    position: 'absolute',
  },

  container: {
    flex: 1,
    paddingTop: '10%',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  play_button: {
    position: 'absolute',
    bottom: '5%',
  },
  settings_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  high_score: {
    color: colors.medium,
    fontSize: 18,
    fontFamily: 'Andika-Regular',
    paddingLeft: 2,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Andika-Regular',
    color: colors.white,
    margin: '4%',
    top: 10,

    // position: "absolute",
  },
  title_shadow: {
    fontSize: 50,
    fontFamily: 'Andika-Regular',
    color: colors.medium,
    margin: '4%',
    top: 10,
    paddingLeft: 2,
    paddingTop: 3,
    position: 'absolute',
  },
});

export default HomeScreen;
