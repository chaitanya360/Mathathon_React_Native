import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Vibration,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedView_height from '../animations/AnimatedView_height';
import colors from '../config/colors';
import {useContext} from 'react';
import {Context} from '../context/settingsContext';

function Settings() {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [settings, setSettings] = useContext(Context);

  const Overlay = () => (
    <TouchableWithoutFeedback onPress={() => setShowSettingsMenu(false)}>
      <View style={styles.overlay}></View>
    </TouchableWithoutFeedback>
  );

  const SettingsMenu = () => (
    <View>
      <AnimatedView_height style={styles.settings_menu} toHeight={70}>
        <View style={styles.menu_button}>
          <TouchableWithoutFeedback
            onPress={() => {
              setSettings({
                vibration: !settings.vibration,
              });
              setTimeout(() => {
                setShowSettingsMenu(false);
              }, 400);
            }}>
            <MaterialCommunityIcons
              name={settings.vibration ? 'vibrate' : 'vibrate-off'}
              size={30}
              color={colors.dark}
            />
          </TouchableWithoutFeedback>
        </View>
      </AnimatedView_height>
    </View>
  );

  const SettingsIcon = () => (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowSettingsMenu((old) => !old);
        if (settings.vibration) Vibration.vibrate(50, false);
      }}>
      <View style={styles.settings_icon}>
        <Feather name="settings" size={28} color={colors.medium} />
      </View>
    </TouchableWithoutFeedback>
  );

  useEffect(() => {
    return () => setShowSettingsMenu(false);
  }, []);

  return (
    <View style={styles.container}>
      {showSettingsMenu && <Overlay />}

      <SettingsIcon />

      {showSettingsMenu && <SettingsMenu />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  settings_menu: {
    position: 'absolute',
    top: 80,
    right: 10,
    padding: 10,
    width: 60,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  menu_button: {
    margin: 5,
    marginVertical: 10,
  },
  settings_icon: {
    top: 40,
    right: 20,
    position: 'absolute',
  },
  overlay: {
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('screen').height + 300,
    opacity: 0.3,
  },
});

export default Settings;
