import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import * as React from "react";
import { useEffect, useRef } from "react";
import { AuthConsumer } from "./src/components/auth/AuthConsumer";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const queryClient = new QueryClient();
  const navigationRef = useRef<any>(null);

  //폰트 시스템
  const [fontsLoaded] = useFonts({
    SCDream6: require("./src/assets/fonts/SCDream6.otf"),
    SCDream5: require("./src/assets/fonts/SCDream5.otf"),
    SCDream4: require("./src/assets/fonts/SCDream4.otf"),
    Oblique: require("./src/assets/fonts/Oblique.otf"),
  });

  useEffect(() => {
    // 푸시 알림 핸들링 설정
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
        shouldShowBanner: true,
        shouldShowList: true,
      }),
    });
    // 푸시 알림 클릭 리스너
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const data = response.notification.request.content.data;

        if (data && data.alarmType && navigationRef.current) {
          if (data.alarmType === "FRIEND") {
            navigationRef.current.navigate("FriendPage");
          } else if (data.alarmType === "CHALLENGE") {
            navigationRef.current.navigate("Challenge");
          }
        }
      }
    );

    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer ref={navigationRef}>
          <AuthConsumer />
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
}
