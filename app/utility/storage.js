import AsyncStorage from '@react-native-async-storage/async-storage';

async function store(key, value) {
  await AsyncStorage.setItem(key, value);
}

async function get(key) {
  let result = await AsyncStorage.getItem(key);
  if (result) return result;
}

export default {store, get};
