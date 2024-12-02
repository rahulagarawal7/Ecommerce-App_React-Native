import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EmptyPage} from '../../component';
import {BellEmptyLogo} from '../../assets';
import {screenNames} from '../../utils/constants';
import {styles} from './styles';

const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.emptyBox}>
        <EmptyPage
          btnName="explore categories"
          image={BellEmptyLogo}
          title="no notification yet"
          btn={true}
          navigationScreeName={screenNames.seeAllCategories}
        />
      </View>
    </ScrollView>
  );
};

export default Notification;
