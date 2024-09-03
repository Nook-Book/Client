import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "../../pages/searchPage/SearchPage";
import BestSellerPage from "../../pages/searchPage/BestSellerPage";
import SearchResultPage from "../../pages/searchPage/SearchResultPage";
import { RootSearchStackParamList } from "../../types/navigation/navigation";
import { Color } from "../../styles/Theme";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const SearchStack = createNativeStackNavigator<RootSearchStackParamList>();

export default function SearchStackScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "BestSellerPage" || routeName === "SearchResultPage") {
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
    <SearchStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <SearchStack.Screen name="SearchPage" component={SearchPage} />
      <SearchStack.Screen name="BestSellerPage" component={BestSellerPage} />
      <SearchStack.Screen
        name="SearchResultPage"
        component={SearchResultPage}
      />
    </SearchStack.Navigator>
  );
}
