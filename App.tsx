import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigation from "./src/components/navBar/TabNavigation";
import OnboardingOverlay from "./src/pages/libraryPage/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [showOnboarding, setShowOnboarding] = React.useState(false);

  const handleOnboardingDismiss = () => {
    setShowOnboarding(false);
  };

  //처음 방문했는지 확인
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

  return (
    <NavigationContainer>
      <TabNavigation />
      {showOnboarding && (
        <OnboardingOverlay onDismiss={handleOnboardingDismiss} />
      )}
    </NavigationContainer>
  );
}
