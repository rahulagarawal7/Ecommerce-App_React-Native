import { StyleSheet } from "react-native";
import { colors, ms } from "../../utils";

export 
const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  box: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: ms(56),
    width: ms(342),
    justifyContent: 'space-around',
  },
  smallInputBox: {
    width: ms(160),
  },
  outerBox: {
    backgroundColor: colors.primaryBgColor,
    height: '100%',
    width: '100%',
    
  },
  userImageBox: {
    height: ms(120),
    width: ms(120),
    borderRadius: 120,
    alignSelf: 'center',
    marginTop: '20%',
  },
  userImage: {
    height: ms(100),
    width: ms(100),
    borderRadius: 120,
    objectFit: 'fill',
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
});
