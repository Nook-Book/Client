import { StyleSheet } from "react-native";
import { Color } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  searchInput: {
    height: 40,
    margin: 16,
    padding: 12,
    borderRadius: 5,
    backgroundColor: Color.Field[15],
  },
});
