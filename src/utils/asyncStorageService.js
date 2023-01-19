import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log(e, 'setItemFalse');
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const removeValue = async (value) => {
  try {
    await AsyncStorage.removeItem(value);
  } catch (e) {
    // remove error
    console.log(e);
  }

  console.log('Done.');
};

export const viewAllItems = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    console.log(items);
  } catch (error) {
    console.error(error);
  }
};
