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
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: colors.textColor,
      width: ms(300),
      height: ms(35),
      fontSize: ms(16),
      fontWeight: '400',
    },
    image: {
      height: ms(20),
      width: ms(20),
      marginRight: ms(5),
    },
  });
  