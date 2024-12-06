import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(40),
      width: ms(40),
      borderRadius: 40,
      backgroundColor: colors.secondaryBgColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: ms(14),
      width: ms(6),
    },
    mainContainer: {
      width: ms(342),
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      gap: 5,
    },
    text: {
      marginHorizontal: 20,
      color: colors.textColor,
      fontSize: ms(18),
    },
  });
  