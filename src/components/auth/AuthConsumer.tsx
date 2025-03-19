import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import OnboardingOverlay from "../libary/OnboardingOverlay";
import LoginStackScreen from "../navBar/LoginStackScreen";
import TabNavigation from "../navBar/TabNavigation";

export const AuthConsumer = () => {
  const { isLogin } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <>
      {isLogin ? (
        <LoginStackScreen />
      ) : (
        <>
          <TabNavigation />
          {showOnboarding && (
            <OnboardingOverlay onDismiss={() => setShowOnboarding(false)} />
          )}
        </>
      )}
    </>
  );
};
