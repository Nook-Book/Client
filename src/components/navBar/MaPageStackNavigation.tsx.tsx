import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { PageLists } from "../../constans/myPage";
import EditProfilePage from "../../pages/myPage/EditProfilePage";
import FriendPage from "../../pages/myPage/FriendPage";
import MyPage from "../../pages/myPage/MyPage";
import SetIdPage from "../../pages/myPage/SetIdPage";
import SetNicknamePage from "../../pages/myPage/SetNicknamePage";
import SettingPage from "../../pages/myPage/SettingPage";
import { Color } from "../../styles/Theme";
import { RootMyPageStackParamList } from "../../types/navigation/navigation";

const MyPageStack = createNativeStackNavigator<RootMyPageStackParamList>();

export default function MaPageStackScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (PageLists.includes(routeName!)) {
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
    <MyPageStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <MyPageStack.Screen name="MyPage" component={MyPage} />
      <MyPageStack.Screen
        name="SettingPage"
        component={SettingPage}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="EditProfilePage"
        component={EditProfilePage}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="SetIdPage"
        component={SetIdPage}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="SetNicknamePage"
        component={SetNicknamePage}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="FriendPage"
        component={FriendPage}
        options={{ headerShown: false }}
      />
    </MyPageStack.Navigator>
  );
}
