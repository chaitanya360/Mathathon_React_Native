import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, Vibration, View} from 'react-native';
import AnimatedView from '../animations/AnimatedView';
import QuestionHolder from './QuestionHolder';
import TimerHolder from './TimerHolder';
import Options from './Options';
import GameOverStats from './GameOverStats';
import {useNavigation} from '@react-navigation/native';
import Starting from './Starting';
import {useContext} from 'react';
import {Context} from '../context/settingsContext';
import colors from '../config/colors';
import storage from '../utility/storage';

let timerId = false;

function QandA() {
  //this is main logic function
  const [settings] = useContext(Context);
  const navigation = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [timerRef, setTimerRef] = useState();
  const [options, setOptions] = useState();
  const [time, setTime] = useState(4000);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMode, setGameOverMode] = useState(0);
  const [starting, setStarting] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [newHighScore, setNewHighScore] = useState(false);

  //random question and it's answer is generate here.

  const handleNextQuestion = () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => handleGameOver(0), time + 150);
    const operators = ['*', '+', '-'];
    const operator = operators[parseInt(Math.random() * 10) % operators.length];

    const num1 =
      operator === '*'
        ? parseInt(Math.random() * 10).toString()
        : parseInt((Math.random() * 100) % 51).toString();
    const num2 =
      operator === '*'
        ? parseInt(Math.random() * 10).toString()
        : parseInt((Math.random() * 100) % 51).toString();

    const question = num1 + ' ' + operator + ' ' + num2;
    const answer = eval(question);

    const random_options = [answer, answer + 3, answer - 6].sort(
      () => Math.random() - 0.5,
    );

    setCurrentQuestion(question.replace('*', 'x'));
    setCurrentAnswer(answer);
    setOptions(random_options);
  };

  //this will make timer animation to start from 0

  const restartTimer = () => {
    if (timerRef) {
      timerRef.reAnimate(0, 100, time);
    }
  };

  const handleOptionSelected = (option) => {
    if (settings.vibration) Vibration.vibrate(50, false);
    clearTimeout(timerId);
    restartTimer();
    if (option === currentAnswer) {
      setScore((old) => old + 1);
      handleNextQuestion();
    } else handleGameOver(1);
  };

  const handleGameRestart = () => {
    clearTimeout(timerId);
    restartTimer();
    setScore(0);
    setGameOver(false);
    setStarting(true);
    setNewHighScore(false);
    const id = setTimeout(() => {
      clearTimeout(id);
      setStarting(false);
      handleNextQuestion();
    }, 2500);
  };

  const checkForHighScore = async () => {
    if (score > highScore) {
      setHighScore(score);
      setNewHighScore(true);
      await storage.store('high_score', score.toString());
    }
  };

  const handleGameOver = (mode) => {
    if (settings.vibration) Vibration.vibrate(200, false);
    setGameOver(true);
    setGameOverMode(mode);
    setCurrentQuestion('Game Over');
    checkForHighScore();
    if (mode && timerRef) {
      timerRef.reAnimate(99, 100, 100);
    }
  };

  const getHighScore = async () => {
    const result = await storage.get('high_score');
    if (result) {
      setHighScore(parseInt(result));
    }
  };

  useEffect(() => {
    handleGameRestart();
    getHighScore();
    return () => setTimerRef(false);
  }, []);

  return !starting ? (
    <View style={[styles.container]}>
      <View style={[styles.score_container, {opacity: gameOver ? 0 : 1}]}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <TimerHolder
        setTimerRef={setTimerRef}
        time={time}
        gameOver={gameOver}
        setGameOver={setGameOver}>
        <View style={{width: '100%'}}>
          <QuestionHolder
            question={currentQuestion}
            gameOver={gameOver}
            mode={gameOverMode}
          />
        </View>
      </TimerHolder>
      {gameOver ? (
        <AnimatedView style={styles.gameOverContianer}>
          <GameOverStats
            onHomePressed={() => navigation.navigate('home', {highScore})}
            onRestartPressed={() => handleGameRestart()}
            score={score}
            highScore={highScore}
            newHighScore={newHighScore}
          />
        </AnimatedView>
      ) : (
        <View style={[styles.optionsContainer]}>
          <Options
            options={options}
            selectedOption={(value) => handleOptionSelected(value)}
          />
        </View>
      )}
      {gameOver && <View style={styles.overlay}></View>}
    </View>
  ) : (
    <Starting />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    zIndex: 0,
  },
  optionsContainer: {
    marginTop: '15%',
  },
  overlay: {
    top: -200,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('screen').height + 300,
    opacity: 0.35,
    backgroundColor: colors.dark,
    zIndex: 1,
  },
  score: {
    color: colors.medium,
    fontSize: 30,
    fontFamily: 'Andika-Regular',
  },
  gameOverContianer: {
    zIndex: 3,
    position: 'absolute',
    bottom: '5%',
  },

  score_container: {
    marginBottom: '5%',
  },
});

export default QandA;
