import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(96),
      width: ms(342),
      backgroundColor: colors.secondaryBgColor,
      alignSelf: 'center',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    nameText: {
      color: colors.textColor,
      fontWeight: '600',
      fontSize: ms(18),
    },
    innerContainer: {
      height: ms(80),
      width: ms(230),
      justifyContent: 'space-between',
    },
    emailText: {
      color: colors.textColor,
      fontWeight: '400',
      fontSize: ms(16),
    },
    editText: {
      color: colors.tintColor,
      fontWeight: '400',
      fontSize: ms(18),
      width: ms(90),
      textAlign: 'right',
    },
  });
  