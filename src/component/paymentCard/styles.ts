import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export 
const styles = StyleSheet.create({
  container: {
    height: ms(56),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  image: {
    height: ms(24),
    width: ms(24),
    transform: [{rotate: '180deg'}],
  },
  text: {
    color: colors.textColor,
    fontSize: ms(12),
  },
  innerBox: {
    gap: 10,
    flexDirection: 'row',
  },
});