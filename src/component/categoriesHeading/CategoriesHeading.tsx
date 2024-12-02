import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';

interface CategoriesHeadingProps {
  primaryText: string;
  secondaryText: string;
  screenName?: keyof RootStackParamList;
}

const CategoriesHeading: React.FC<CategoriesHeadingProps> = ({
  primaryText,
  secondaryText,
  screenName,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{t(primaryText)}</Text>
      <Text
        style={styles.seeAllText}
        onPress={() => navigation.navigate(screenName as string, undefined)}>
        {t(secondaryText)}
      </Text>
    </View>
  );
};

export default CategoriesHeading;
