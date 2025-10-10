import * as SecureStore from "expo-secure-store";

const saveSecureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

const getSecureStore = async (key: string) => {
  const storedData = (await SecureStore.getItemAsync(key)) ?? null;

  return storedData;
};

const deleteSecureStore = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};

export { saveSecureStore, getSecureStore, deleteSecureStore };
