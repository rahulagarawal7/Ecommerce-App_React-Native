import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    headingText: {
      color: colors.textColor,
      fontWeight: '600',
      fontSize: ms(20),
      padding: 15,
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
    },
    loaderOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderText: {
      marginTop: 20,
      color: colors.textColor,
      fontSize: ms(18),
    },
  });
  