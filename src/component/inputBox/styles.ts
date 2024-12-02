import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(56),
      width: ms(342),
      backgroundColor: colors.secondaryBgColor,
      borderRadius: 10,
      justifyContent: 'center',
      paddingHorizontal: 10,
      alignSelf: 'center',
    },
    text: {
      color: colors.textColor,
      fontSize: ms(16),
      fontWeight: '400',
    },
  });
  