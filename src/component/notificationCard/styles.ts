import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    showStyle: {
      height: ms(150),
      width: ms(342),
    },
  
    container: {
      height: ms(64),
      width: ms(342),
      borderRadius: 10,
      backgroundColor: colors.secondaryBgColor,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    image: {
      height: ms(24),
      width: ms(24),
  
      marginHorizontal: 10,
    },
    nameText: {
      width: ms(250),
      color: colors?.textColor,
      fontWeight: '400',
      fontSize: ms(12),
    },
  });
  