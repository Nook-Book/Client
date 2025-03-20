import * as SecureStore from "expo-secure-store";

const STORAGE_KEY = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const storage = {
  setTokens: async (tokens: { accessToken: string; refreshToken: string }) => {
    try {
      await SecureStore.setItemAsync(
        STORAGE_KEY.ACCESS_TOKEN,
        tokens.accessToken
      );
      await SecureStore.setItemAsync(
        STORAGE_KEY.REFRESH_TOKEN,
        tokens.refreshToken
      );
      console.log("토큰 저장 완료:", {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    } catch (error) {
      console.error("토큰 저장 실패:", error);
    }
  },

  getAccessToken: async () => {
    try {
      const token = await SecureStore.getItemAsync(STORAGE_KEY.ACCESS_TOKEN);
      console.log("가져온 액세스 토큰:", token);
      return token;
    } catch (error) {
      console.error("액세스 토큰 조회 실패:", error);
      return null;
    }
  },

  getRefreshToken: async () => {
    return await SecureStore.getItemAsync(STORAGE_KEY.REFRESH_TOKEN);
  },

  clearTokens: async () => {
    await SecureStore.deleteItemAsync(STORAGE_KEY.ACCESS_TOKEN);
    await SecureStore.deleteItemAsync(STORAGE_KEY.REFRESH_TOKEN);
  },
};
