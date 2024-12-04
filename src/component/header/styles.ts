import { StyleSheet } from "react-native";
import { ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      marginHorizontal: ms(20),
      flexDirection: 'row',
      marginTop:ms(10),
      justifyContent: 'space-between',
    },
    profileImage: {
      height: ms(40),
      width: ms(40),
      borderRadius: ms(40),
    },
    userImage: {
      height: ms(40),
      width: ms(40),
      borderRadius: ms(40),
    },
    cartLogo: {
      height: ms(40),
      width: ms(40),
    },
  });
  