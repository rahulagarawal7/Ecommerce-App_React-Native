import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
interface ButtonProps {
  buttonName: string;
  style?: object;
  handleSubmit: Function;
}

const Button: React.FC<ButtonProps> = ({buttonName, style, handleSubmit}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => {
        handleSubmit();
      }}>
      <Text style={styles.text}>{t(buttonName)}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: ms(52),
    width: ms(342),
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  text: {
    color: colors.primaryBgColor,
    fontSize: ms(18),
    fontWeight: '600',
  },
});
