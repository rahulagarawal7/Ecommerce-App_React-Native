import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

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
