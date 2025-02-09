import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingOverlay from "./src/components/libary/OnboardingOverlay";
import TabNavigation from "./src/components/navBar/TabNavigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import * as Linking from "expo-linking";

export default function App() {
  const queryClient = new QueryClient();

  const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
      screens: {
        Detail: "book",
      },
    },
  };

  //처음 방문 시 온보딩 화면 실행
  const [showOnboarding, setShowOnboarding] = React.useState(false);

  const handleOnboardingDismiss = () => {
    setShowOnboarding(false);
  };

  React.useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasOnboarding = await AsyncStorage.getItem("hasOnboarding");
      if (hasOnboarding === null) {
        setShowOnboarding(true);
        await AsyncStorage.setItem("hasOnboarding", "true");
      }
    };

    checkFirstLaunch();
  }, []);

  //폰트 시스템
  const [fontsLoaded] = useFonts({
    SCDream6: require("./src/assets/fonts/SCDream6.otf"),
    SCDream5: require("./src/assets/fonts/SCDream5.otf"),
    SCDream4: require("./src/assets/fonts/SCDream4.otf"),
  });
  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer linking={linking}>
        <TabNavigation />
        {showOnboarding && (
          <OnboardingOverlay onDismiss={handleOnboardingDismiss} />
        )}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
