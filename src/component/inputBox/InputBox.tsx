import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {t} from 'i18next';

interface InputBoxProps {
  placeholder: string;
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  containerStyle,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholder={t(placeholder)}
        placeholderTextColor={colors.textColor}
        style={styles.text}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    height: ms(56),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  text: {
    color: colors.textColor,
  },
});
