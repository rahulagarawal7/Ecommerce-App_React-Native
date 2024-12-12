import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
    },
    box: {
      width: ms(342),
      backgroundColor: colors.cardBgColor,
      height: '100%',
      alignSelf: 'center',
      borderRadius: 10,
     marginBottom:ms(20)
    },
    lkeImage: {
      height: ms(25),
      width: ms(24),
    },
    likeContainer: {
      position: 'absolute',
      alignSelf: 'flex-end',
      padding: 15,
    },
    imageStyle: {
      height: ms(300),
      width: ms(300),
      alignSelf: 'center',
      marginTop:ms(20),
      borderRadius: 10,
    },
    text: {
      fontSize: ms(20),
      padding: 10,
      fontWeight: '700',
      color: colors.textColor,
    },
    descText: {
      textAlign: 'justify',
      padding: 10,
      color: colors.textColor,
    },
    textTitle: {
      color: colors.textColor,
      padding: 10,
      textAlign: 'justify',
      fontSize: ms(18),
    },
    cartLogo: {
      height: ms(40),
      width: ms(40),
     marginRight:ms(20),
     marginTop:ms(10)
    },
    cartBox:{
      position: 'absolute',
      alignSelf: 'flex-end',
    },
    backBox:{
      marginBottom:ms(20),
      marginTop:ms(10)
    }
  });
  