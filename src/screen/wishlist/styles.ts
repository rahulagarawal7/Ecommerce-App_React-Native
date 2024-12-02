import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.primaryBgColor,
    },
    productCard: {
      width: '90%',
      height: ms(400),
      backgroundColor: colors.cardBgColor,
      margin: 5,
      alignSelf: 'center',
      borderRadius: 10,
    },
    productImage: {
      height: ms(200),
      width: '100%',
      objectFit: 'contain',
      alignSelf: 'center',
      marginTop: 10,
      borderRadius: 10,
    },
    productInfo: {
      width: '100%',
      height: ms(200),
      gap: 5,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    productTitle: {
      color: colors.textColor,
      fontSize: ms(15),
      textAlign: 'center',
      fontWeight: '500',
    },
    productBrand: {
      color: colors.textColor,
      fontSize: ms(25),
      textAlign: 'center',
      fontWeight: '800',
    },
    productPrice: {
      color: colors.textColor,
      fontSize: ms(18),
      textAlign: 'center',
      fontWeight: '800',
    },
    removeButton: {
      height: ms(52),
      width: '90%',
      backgroundColor: colors.tintColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      alignSelf: 'center',
    },
    removeButtonText: {
      color: colors.primaryBgColor,
      fontSize: ms(18),
      fontWeight: '600',
    },
    emptyBox: {
      marginTop: '40%',
    },
  });
  