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
      justifyContent: 'center',
    },
    empty: {
      marginTop: '30%',
    },
    paymentCard: {
      marginTop: ms(20),
    },
  });
  