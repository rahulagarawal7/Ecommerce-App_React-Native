import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryBgColor,
    },
    text: {
      fontSize: ms(18),
      fontWeight: '500',
      marginLeft: ms(10),
      color: colors.textColor,
    },
    box: {
      width: ms(342),
      alignSelf: 'center',
      marginTop: ms(20),
      gap: ms(10),
    },
    innerBox: {
      backgroundColor: colors.secondaryBgColor,
      paddingVertical: ms(15),
      justifyContent: 'center',
      borderRadius: 15,
    },
    selectedBox: {
      borderColor: colors.selectedBorderColor,
      borderWidth: 2,
    },
  });