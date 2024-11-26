import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import {RootStackParamList} from '../../navigation/types';
import {ProductTypes} from '../../utils/types';

interface HeadingTextProps {
  primaryText: string;
  secondaryText: string;
  screenName: keyof RootStackParamList;
  seeAllList: ProductTypes[];
}

const HeadingText: React.FC<HeadingTextProps> = ({
  primaryText,
  secondaryText,
  screenName,
  seeAllList,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{t(primaryText)}</Text>
      <Text
        style={styles.seeAllText}
        onPress={() =>
          navigation.navigate(screenName as string, {data: seeAllList})
        }>
        {t(secondaryText)}
      </Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  container: {
    width: ms(341),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: colors.textColor,
    fontSize: ms(16),
  },
  headingText: {
    color: colors.textColor,
    fontSize: ms(18),
    fontWeight: '500',
  },
});
