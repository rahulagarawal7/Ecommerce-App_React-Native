import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(40),
      width: ms(342),
      backgroundColor: colors.secondaryBgColor,
      alignSelf: 'center',
      borderRadius: 20,
      justifyContent: 'center',
    },
    box: {
      flexDirection: 'row',
      marginHorizontal: ms(10),
    },
    searchImage: {
      height: ms(16),
      width: ms(16),
      alignSelf: 'center',
    },
    searchText: {
      marginHorizontal: 10,
      color: colors.textColor,
    },
  });