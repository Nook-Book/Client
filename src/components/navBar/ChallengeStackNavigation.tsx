import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Color } from "../../styles/Theme";
import ChallengePage from "../../pages/challengePage/ChallengePage";
import AllChallengePage from "../../pages/challengePage/AllChallengePage";
import ChallengeDetailPage from "../../pages/challengePage/ChallengeDetailPage";
import StatusCardDetailPage from "../../pages/challengePage/StatusCardDetailPage";
import NewChallengePage from "../../pages/challengePage/NewChallengePage";
import ChallengeDetailSettingPage from "../../pages/challengePage/ChallengeDetailSettingPage";
import EditParticipantPage from "../../pages/challengePage/EditParticipantPage";

const ChallengeStack = createNativeStackNavigator();

export default function ChallengeStackScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "ChallengeDetail" ||
      routeName === "StatusCardDetail" ||
      routeName === "NewChallenge" ||
      routeName === "ChallengeDetailSetting" ||
      routeName === "EditParticipant"
    ) {
      navigation.setOptions({
        tabBarStyle: { display: "none" },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: Color.Secondary,
          height: "auto",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: "absolute",
          shadowColor: "#A4A4A4",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 10,
          display: "flex",
        },
      });
    }
  }, [navigation, route]);

  return (
    <ChallengeStack.Navigator>
      <ChallengeStack.Screen
        name="Challenge"
        component={ChallengePage}
        options={{ headerShown: false }}
      />
      <ChallengeStack.Screen
        name="AllChallenge"
        component={AllChallengePage}
        options={{ headerShown: false }}
      />
      <ChallengeStack.Screen
        name="ChallengeDetail"
        component={ChallengeDetailPage}
        options={{ headerShown: false, animation: "fade" }}
      />
      <ChallengeStack.Screen
        name="StatusCardDetail"
        component={StatusCardDetailPage}
        options={{ headerShown: false }}
      />
      <ChallengeStack.Screen
        name="NewChallenge"
        component={NewChallengePage}
        options={{ headerShown: false }}
      />
      <ChallengeStack.Screen
        name="ChallengeDetailSetting"
        component={ChallengeDetailSettingPage}
        options={{ headerShown: false }}
      />
      <ChallengeStack.Screen
        name="EditParticipant"
        component={EditParticipantPage}
        options={{ headerShown: false }}
      />
    </ChallengeStack.Navigator>
  );
}
