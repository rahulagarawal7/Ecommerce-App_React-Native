import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
    containerBox: {
      gap: 20,
    },
    box: {
      gap: 10,
    },
    hederBox: {
      gap: ms(20),
  },
  emptyContainer: {
    opacity:.2,
    height: ms(280),
    width: ms(159),
    borderRadius: 10,
    backgroundColor: colors.secondaryBgColor,
    marginHorizontal: 10,
    borderWidth: 0.4,
    borderColor: colors.textColor,
    margin: 5,
  },
  emptyBox: {
    flexDirection:"row"
  }
  });
  