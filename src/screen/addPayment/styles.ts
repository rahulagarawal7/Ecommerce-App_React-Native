import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryBgColor,
      gap: 15,
      paddingHorizontal: ms(20),
      paddingVertical: ms(20),
    },
    box: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallInputBox: {
      width: ms(160),
    },
    error: {
      color: colors.error,
      fontSize: ms(12),
      marginTop: ms(4),
    },
  });
  