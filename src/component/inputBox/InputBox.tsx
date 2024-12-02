import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {styles} from './styles';

interface InputBoxProps {
  placeholder: string;
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  value?: string | null;
  editable?: boolean;
  keyboardType: string;
  onChange?: (text: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  containerStyle,
  onChangeText,
  value,
  editable,
  keyboardType,
  onChange,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholder={t(placeholder)}
        placeholderTextColor={colors.textColor}
        style={styles.text}
        onChangeText={onChangeText}
        value={value}
        onChange={onChange}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputBox;
