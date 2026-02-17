import * as SecureStore from "expo-secure-store";

// expo-secure-store
async function saveSecureStore(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

// auth.ts 에서 인증 시 사용
async function getSecureStore(key: string) {
  const storedData = (await SecureStore.getItemAsync(key)) ?? null;

  return storedData;
}

// 삭제 시
async function deleteSecureStore(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export { saveSecureStore, getSecureStore, deleteSecureStore };
