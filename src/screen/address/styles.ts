import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryBgColor,
    },
    scrollContent: {
      flexGrow: 1,
      paddingBottom: 80,
    },
    btn: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
    },
    empty: {
      marginTop: '30%',
    },
    addressCard: {
      marginTop: ms(20),
    },
  });
  