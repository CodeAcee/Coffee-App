export const saveUser = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

// getting data
export const getUser = async (key) => {
  try {
    await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

// remove user
export const removeUser = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const removeData = async () => {
  try {
    const savedUser = await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
