import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertPage from "./AlertPage";
import LibraryPage from "./LibraryPage";

const LibraryStack = createNativeStackNavigator();

export default function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="Library"
        component={LibraryPage}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen name="Alert" component={AlertPage} />
    </LibraryStack.Navigator>
  );
}
