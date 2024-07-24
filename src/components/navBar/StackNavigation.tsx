// src/components/navBar/StackNavigation.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "../../pages/searchPage/SearchPage";
import BestSellerPage from "../../pages/searchPage/BestSellerPage";
import SearchResultPage from "../../pages/searchPage/SearchResultPage";
import { RootStackParamList } from "../../types/navigation/navigation";

const SearchStack = createNativeStackNavigator<RootStackParamList>();

export default function SearchStackScreen() {
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
