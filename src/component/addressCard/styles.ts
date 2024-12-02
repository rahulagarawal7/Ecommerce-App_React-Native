import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(72),
      width: ms(342),
      backgroundColor: colors.secondaryBgColor,
      borderRadius: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: colors.textColor,
      fontSize: ms(16),
    },
    editText: {
      fontSize: ms(20),
      color: colors.tintColor,
    },
  });
  