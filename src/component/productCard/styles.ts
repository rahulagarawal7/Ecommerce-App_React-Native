import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    ProductImage: {
      height: ms(210),
      width: ms(156),
      borderRadius: 10,
      backgroundColor: colors.cardBgColor,
      objectFit: 'contain',
      marginTop: 8,
      
    },
    container: {
      height: ms(281),
      width: ms(159),
      borderRadius: 10,
      backgroundColor: colors.secondaryBgColor,
      marginHorizontal: 10,
      borderWidth: 0.4,
      borderColor: colors.textColor,
      margin: 5,
    },
    textBox: {
      height: ms(59),
      width: ms(159),
      justifyContent: 'center',
      marginHorizontal: 10,
      gap: 5,
    },
    priceText: {
      color: colors.textColor,
      fontWeight: '700',
    },
    nameText: {
      color: colors.textColor,
      fontWeight: '400',
    },
    lkeImage: {
      height: ms(15),
      width: ms(14),
    },
    likeContainer: {
      position: 'absolute',
      alignSelf: 'flex-end',
      padding: 15,
    },
    loadingBox: {
      marginTop:ms(35),
      height: ms(170),
      width: ms(156),
      position: 'absolute',
      zIndex: 1,
      justifyContent: 'center',
      alignSelf:"center"
    },
  });
  