import * as SecureStore from "expo-secure-store";

const STORAGE_KEY = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const storage = {
  setTokens: async (tokens: { accessToken: string; refreshToken: string }) => {
    await SecureStore.setItemAsync(
      STORAGE_KEY.ACCESS_TOKEN,
      tokens.accessToken
    );
    await SecureStore.setItemAsync(
      STORAGE_KEY.REFRESH_TOKEN,
      tokens.refreshToken
    );
  },

  getAccessToken: async () => {
    return await SecureStore.getItemAsync(STORAGE_KEY.ACCESS_TOKEN);
  },

  getRefreshToken: async () => {
    return await SecureStore.getItemAsync(STORAGE_KEY.REFRESH_TOKEN);
  },

  clearTokens: async () => {
    await SecureStore.deleteItemAsync(STORAGE_KEY.ACCESS_TOKEN);
    await SecureStore.deleteItemAsync(STORAGE_KEY.REFRESH_TOKEN);
  },
};
