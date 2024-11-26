import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {colors, ms} from '../../utils';
import {BackButton} from '../../component';

interface FinalPaymentProps {
  route: RouteProp<RootStackParamList, 'finalPayment'>;
}

const FinalPayment: React.FC<FinalPaymentProps> = ({route}) => {
  const totalPrice = route?.params?.price;
  return (
    <View style={styles.mainBox}>
      <BackButton heading="back" />
      <View style={styles.container}>
        <Text>total</Text>
      </View>
    </View>
  );
};

export default FinalPayment;

const styles = StyleSheet.create({
  container: {
    height: ms(200),
    width: ms(342),
    borderWidth: 0.5,
    alignSelf: 'center',
    backgroundColor: colors.secondaryBgColor,
    borderRadius: 10,
    marginTop: '5%',
  },
  mainBox: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
});
