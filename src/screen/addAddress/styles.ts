import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryBgColor,
      gap: 15,
    },
    box: {
      alignSelf: 'center',
      flexDirection: 'row',
      height: ms(56),
      width: ms(342),
      justifyContent: 'space-around',
    },
    smallInputBox: {
      width: ms(160),
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
  