import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      width: ms(341),
      alignSelf: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    seeAllText: {
      color: colors.textColor,
      fontSize: ms(16),
    },
    headingText: {
      color: colors.textColor,
      fontSize: ms(18),
      fontWeight: '500',
    },
  });
  