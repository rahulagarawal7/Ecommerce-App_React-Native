import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';

const Help = () => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />

      <ScrollView style={styles.textBox}>
        <Text style={styles.text}>{t('lorem')}</Text>
        <Text style={styles.text}>{t('lorem')}</Text>
      </ScrollView>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  textBox: {
    width: ms(342),
    alignSelf: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: ms(16),
    color: colors.textColor,
    marginVertical: 10,
  },
});
