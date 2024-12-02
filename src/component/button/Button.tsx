import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {styles} from './styles';
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
