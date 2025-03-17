import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as React from "react";
import { useState } from "react";
import { AuthConsumer } from "./src/components/auth/AuthConsumer";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const queryClient = new QueryClient();

  //처음 방문 시 온보딩 화면 실행
  const [showOnboarding, setShowOnboarding] = useState(false);

  //폰트 시스템
  const [fontsLoaded] = useFonts({
    SCDream6: require("./src/assets/fonts/SCDream6.otf"),
    SCDream5: require("./src/assets/fonts/SCDream5.otf"),
    SCDream4: require("./src/assets/fonts/SCDream4.otf"),
  });
  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <AuthConsumer />
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
}
