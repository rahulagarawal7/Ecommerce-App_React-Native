import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EmptyPage} from '../../component';
import {CheckOutEmptyLogo} from '../../assets';
import {screenNames} from '../../utils/constants';

const Order = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.emptyBox}>
        <EmptyPage
          btnName="explore categories"
          image={CheckOutEmptyLogo}
          title="no order yet"
          navigationScreeName={screenNames.seeAllCategories}
          btn={true}
        />
      </View>
    </ScrollView>
  );
};

export default Order;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  emptyBox: {
    marginTop: '50%',
  },
});
