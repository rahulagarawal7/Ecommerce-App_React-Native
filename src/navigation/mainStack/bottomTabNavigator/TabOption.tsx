import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../../utils';
interface TabOptionsProps {
  focused: boolean;
  Icon: ImageSourcePropType;
}

const TabOptions: React.FC<TabOptionsProps> = ({focused, Icon}) => {
  return (
    <View style={focused && styles.circle}>
      <Image source={Icon} style={[styles.icons, focused && styles.isFocus]} />
    </View>
  );
};

export default TabOptions;

const styles = StyleSheet.create({
  isFocus: {
    color: 'black',
    tintColor: colors.primaryBgColor,
  },
  circle: {
    height: ms(35),
    width: ms(35),
    borderRadius: 20,
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    tintColor: colors.textColor,
    height: ms(22),
    width: ms(22),
  },
});
