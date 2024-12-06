import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    image: {
      height: ms(100),
      width: ms(100),
    },
    container: {
      height: ms(236),
      width: ms(342),
     alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
    },
    text: {
      color: colors.textColor,
      fontSize: 30,
      fontWeight: '500',
    },
  });
  