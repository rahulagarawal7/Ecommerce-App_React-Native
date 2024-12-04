import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.primaryBgColor,
      gap: 20,
    },
    userImage: {
      width: ms(80),
      height: ms(80),
      borderRadius: 80,
    },
    userImageContainer: {
      height: ms(180),
      alignSelf: 'center',
      justifyContent: 'flex-end',
    },
    btnBox: {
      gap: 10,
    },
    scrollViewContainer: {
      gap: 25,
    },
    text: {
     
      fontSize: ms(15),
      marginBottom: 10,
      color: colors.tintColor,
      marginLeft: 5,
    },
  });
  