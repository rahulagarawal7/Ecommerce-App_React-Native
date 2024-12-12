import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    headingText: {
      color: colors.textColor,
      fontWeight: '600',
      fontSize: ms(20),
      marginTop:ms(15),
      marginBottom:ms(5),
      width:ms(340),
      marginLeft:ms(5),
      alignSelf:"center"
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
    },
    loaderOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderText: {
      marginTop: 20,
      color: colors.textColor,
      fontSize: ms(18),
    },
    backBox:{
      marginTop:ms(10)
    }
  });
  