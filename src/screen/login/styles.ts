import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: colors.primaryBgColor,
    },
    heading: {
      color: colors.textColor,
      fontSize: ms(33),
      padding: ms(20),
      marginVertical: '10%',
    },
    inputBox: {
      gap: 20,
    },
    createText: {
      width: ms(342),
      alignSelf: 'center',
      marginTop: 10,
      color: colors.textColor,
    },
    textOne: {
      color: colors.tintColor,
    },
    logo: {
      width: ms(342),
      height: ms(49),
      alignSelf: 'center',
    },
    imgBox: {
      marginVertical: '10%',
      gap: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loadingBox: {
      width: 150,
      height: 150,
      backgroundColor: '#fff',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      elevation: 5,
    },
    loadingText: {
      marginTop: 15,
      fontSize: 16,
      color: '#333',
    },
  });
  