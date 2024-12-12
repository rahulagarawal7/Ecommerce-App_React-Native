import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
      gap:10
    },
    emptyBox: {
      marginTop: '50%',
    },
    productImage: {
      height: ms(160),
      width: '40%',
      objectFit: 'cover',
    },
    productInfo: {
      width: '60%',
      height: ms(200),
      marginLeft: 20,
      gap: 10,
    },
    box: {
      width: '90%',
      height: ms(180),
      backgroundColor: colors.cardBgColor,
      alignSelf: 'center',
      borderRadius: 10,
      padding: 10,
      borderWidth: 0.4,
      flexDirection: 'row',
      marginVertical: 5,
    },
    brand: {
      color: colors.textColor,
      fontSize: ms(18),
      fontWeight: '600',
    },
    button: {
      height: ms(40),
      width: '90%',
      backgroundColor: colors.tintColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    price: {
      color: colors.textColor,
      fontSize: ms(15),
      fontWeight: '600',
    },
    buttonText: {
      color: colors.primaryBgColor,
      fontSize: ms(18),
      fontWeight: '600',
    },
    quantityBox: {
      height: 35,
      width: 35,
      backgroundColor: colors.primaryBgColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    plus: {
      fontSize: 30,
      marginLeft: 10,
      color: colors.primaryBgColor,
    },
    minus: {
      fontSize: 30,
      marginRight: 10,
      color: colors.primaryBgColor,
    }, loadingBox: {
      height: ms(160),
      width: ms(125),
      backgroundColor: colors.loadingBgColor,
      opacity:.3,
      position: 'absolute',
      zIndex: 1,
      justifyContent: 'center',
      alignSelf:"center",
      marginLeft:ms(10)
    },
    quantityContainer: {
      backgroundColor: colors.tintColor,
      flexDirection: 'row',
      borderRadius: 10,
      width: '90%',
      height: ms(40),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    quantityText: {
      color: colors.textColor,
      fontSize: ms(22),
    },
    totalBox: {
      height: ms(50),
      width: ms(342),
      backgroundColor: colors.tintColor,
      alignSelf: 'center',
      borderRadius: 10,
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    textTotal: {
      fontSize: ms(20),
      color: colors.primaryBgColor,
    },
  });
  