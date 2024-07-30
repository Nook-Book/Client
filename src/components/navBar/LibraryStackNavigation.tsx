import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertPage from "../../pages/libraryPage/AlertPage";
import LibraryPage from "../../pages/libraryPage/LibraryPage";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Color } from "../../styles/Theme";
import EditBookPage from "../../pages/libraryPage/EditBookPage";
import EditBookCollectionPage from "../../pages/libraryPage/EditBookCollectionPage";
import DetailPage from "../../pages/detailPage/DetailPage";
import TimerPage from "../../pages/detailPage/TimerPage";
import AllNotePage from "../../pages/detailPage/AllNotePage";
import NotePage from "../../pages/detailPage/NotePage";

const LibraryStack = createNativeStackNavigator();

export default function LibraryStackScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "Alert" ||
      routeName === "EditBook" ||
      routeName === "EditBookCollection" ||
      routeName === "Detail" ||
      routeName === "Timer" ||
      routeName === "AllNote" ||
      routeName === "Note"
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
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="Library"
        component={LibraryPage}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="Alert"
        component={AlertPage}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="EditBook"
        component={EditBookPage}
        options={{ headerShown: false, animation: "fade" }}
      />
      <LibraryStack.Screen
        name="EditBookCollection"
        component={EditBookCollectionPage}
        options={{ headerShown: false, animation: "fade" }}
      />
      <LibraryStack.Screen
        name="Detail"
        component={DetailPage}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="Timer"
        component={TimerPage}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="AllNote"
        component={AllNotePage}
        options={{ headerShown: false }}
      />
      <LibraryStack.Screen
        name="Note"
        component={NotePage}
        options={{ headerShown: false }}
      />
    </LibraryStack.Navigator>
  );
}
