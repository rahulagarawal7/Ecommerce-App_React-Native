import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(100),
      width: ms(342),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      gap: 10,
      backgroundColor: colors.primaryBgColor,
    },
    imageBox: {
      height: ms(56),
      width: ms(56),
      borderRadius: 56,
      backgroundColor: colors.cardBgColor,
    },
    image: {
      height: ms(56),
      width: ms(56),
      borderRadius: 56,
      alignSelf: 'center',
      objectFit: 'cover',
    },
    box: {
      gap: 5,
    },
    categoriesNameText: {
      textAlign: 'center',
      color: colors.textColor,
    },
    loadingBox: {
      height: ms(56),
      width: ms(56),
      borderRadius: 56,
      backgroundColor: colors.loadingBgColor,
      opacity:.3,
      position: 'absolute',
      zIndex: 1,
      justifyContent: 'center',
    },
  });
  