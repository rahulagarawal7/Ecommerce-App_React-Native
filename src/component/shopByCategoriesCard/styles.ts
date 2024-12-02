import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(64),
      width: ms(342),
      borderRadius: 10,
      backgroundColor: colors.secondaryBgColor,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      marginVertical: 5,
    },
    image: {
      height: ms(40),
      width: ms(40),
      borderRadius: 40,
      marginHorizontal: 10,
    },
    nameText: {
      color: colors.textColor,
      fontWeight: '400',
      fontSize: ms(20),
    },
  });
  