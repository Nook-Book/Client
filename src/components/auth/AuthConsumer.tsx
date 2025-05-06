import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import OnboardingOverlay from "../libary/OnboardingOverlay";
import LoginStackScreen from "../navBar/LoginStackScreen";
import TabNavigation from "../navBar/TabNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthConsumer = () => {
  const { isLogin } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleOnboardingDismiss = () => {
    setShowOnboarding(false);
  };

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasOnboarding = await AsyncStorage.getItem("showOnboarding");
      if (hasOnboarding !== "true") {
        setShowOnboarding(true);
        await AsyncStorage.setItem("showOnboarding", "true");
      }
    };

    if (isLogin) checkFirstLaunch();
  }, [isLogin]);

  return (
    <>
      {!isLogin ? (
        <LoginStackScreen />
      ) : (
        <>
          <TabNavigation />
          {showOnboarding && (
            <OnboardingOverlay onDismiss={handleOnboardingDismiss} />
          )}
        </>
      )}
    </>
  );
};
