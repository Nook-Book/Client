import api from "..";

// 서버에 푸시 토큰 전송하는 함수
export async function sendPushTokenToServer(expoPushToken: string) {
  try {
    // API 엔드포인트는 실제 서버에 맞게 수정 필요
    await api.post("/api/v1/users/expo-push-token", { expoPushToken });
    console.log("푸시 토큰 등록 성공:", expoPushToken);
  } catch (error) {
    console.error("푸시 토큰 등록 실패:", error);
  }
}
