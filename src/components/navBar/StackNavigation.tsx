// src/components/navBar/StackNavigation.tsx
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "../../pages/searchPage/SearchPage";
import BestSellerPage from "../../pages/searchPage/BestSellerPage"; // BestSellerPage를 추가

const SearchStack = createNativeStackNavigator();

export default function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <SearchStack.Screen name="SearchPage" component={SearchPage} />
      <SearchStack.Screen name="BestSellerPage" component={BestSellerPage} />
    </SearchStack.Navigator>
  );
}
