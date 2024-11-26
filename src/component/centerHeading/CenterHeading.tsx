import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';

interface CenterHeadingProps {
  headingName: string;
}

const CenterHeading: React.FC<CenterHeadingProps> = ({headingName}) => {
  return (
    <View>
      <Text style={styles.text}>
        {headingName?.charAt(0).toUpperCase() + headingName.slice(1)}
      </Text>
    </View>
  );
};

export default CenterHeading;

const styles = StyleSheet.create({
  text: {
    color: colors.textColor,
    alignSelf: 'center',
    fontSize: ms(18),
    fontWeight: '500',
  },
});
