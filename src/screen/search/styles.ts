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
      marginTop: ms(5),
    },
    headingText: {
      fontSize: ms(24),
      fontWeight: '500',
      width: ms(342),
      color:colors.textColor,
      alignSelf:"center",
      marginVertical:ms(10)
    },
    noResultsText:{
      alignSelf:"center",
      color:colors.textColor,
      fontSize:ms(22),
      marginTop:ms(20)
    }
  });
  