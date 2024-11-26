import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, ms} from '../../utils';
import {DayIcon, NightIcon} from '../../assets';

const ChangeTheme = () => {
  const [btnOn, setButOFF] = useState(true);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setButOFF(!btnOn)}>
      <View style={[styles.innerBox, btnOn && styles.on]}>
        <Image source={btnOn ? NightIcon : DayIcon} style={styles.icons} />
      </View>
    </TouchableOpacity>
  );
};

export default ChangeTheme;

const styles = StyleSheet.create({
  container: {
    width: ms(70),
    height: ms(35),
    backgroundColor: colors.radioButtonBgColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 4,
  },
  innerBox: {
    width: ms(25),
    height: ms(25),
    borderRadius: 15,
    backgroundColor: colors.cardBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  on: {
    alignSelf: 'flex-end',
  },
  icons: {
    width: ms(20),
    height: ms(20),
  },
});
