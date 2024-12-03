import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: ms(150),
      width: ms(342),
      borderWidth: 0.5,
      alignSelf: 'center',
      backgroundColor: colors.secondaryBgColor,
      borderRadius: 10,
      marginTop: '5%',
      gap: ms(20),
      justifyContent: 'center',
    },
    price: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: ms(10),
    },
    mainBox: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
    },
    firstBox: {
      marginTop: ms(20),
      gap: ms(15),
    },
    UPIText: {
      color: colors.textColor,
      fontSize: ms(16),
      fontWeight: '600',
      alignSelf: 'center',
    },
    UPIContainer: {
      backgroundColor: colors.secondaryBgColor,
      height: ms(30),
      width: ms(342),
      alignSelf: 'center',
      borderRadius: ms(10),
      justifyContent: 'center',
      marginTop: ms(15),
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
      marginBottom: ms(50),
    },
    textTotal: {
      fontSize: ms(20),
      color: colors.primaryBgColor,
    },
    scrollBox: {
      height: '100%',
      justifyContent: 'space-between',
    },
  });
  