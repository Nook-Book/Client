import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginPage from "../../pages/loginPage/LoginPage";
import EditProfilePage from "../../pages/myPage/EditProfilePage";
import { RootLoginStackParamList } from "../../types/navigation/navigation";

const LoginStack = createNativeStackNavigator<RootLoginStackParamList>();

export default function LoginStackScreen() {
  //   React.useLayoutEffect(() => {
  //     const routeName = getFocusedRouteNameFromRoute(route);
  //     if (PageLists.includes(routeName!)) {
  //       navigation.setOptions({
  //         tabBarStyle: { display: "none" },
  //       });
  //     } else {
  //       navigation.setOptions({
  //         tabBarStyle: {
  //           borderTopWidth: 0,
  //           backgroundColor: Color.Secondary,
  //           height: "auto",
  //           borderTopLeftRadius: 10,
  //           borderTopRightRadius: 10,
  //           position: "absolute",
  //           shadowColor: "#A4A4A4",
  //           shadowOffset: { width: 0, height: -2 },
  //           shadowOpacity: 0.25,
  //           shadowRadius: 10,
  //           elevation: 10,
  //           display: "flex",
  //         },
  //       });
  //     }
  //   }, [navigation, route]);
  return (
    <LoginStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <LoginStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="JoinPage"
        component={EditProfilePage}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
}
