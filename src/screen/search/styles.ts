import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
      gap: 15,
    },
    box: {
      marginTop: ms(20),
    },
    headingText: {
      fontSize: ms(18),
      fontWeight: '500',
      padding: ms(15),
    },
  });
  