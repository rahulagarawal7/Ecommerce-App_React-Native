import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(52),
      width: ms(342),
      backgroundColor: colors.tintColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      alignSelf: 'center',
    },
    text: {
      color: colors.primaryBgColor,
      fontSize: ms(18),
      fontWeight: '600',
    },
  });