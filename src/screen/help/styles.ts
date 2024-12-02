import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
    },
    textBox: {
      width: ms(342),
      alignSelf: 'center',
      marginVertical: 10,
    },
    text: {
      fontSize: ms(16),
      color: colors.textColor,
      marginVertical: 10,
    },
  });
  