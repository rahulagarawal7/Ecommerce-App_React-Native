import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {styles} from './styles';

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
