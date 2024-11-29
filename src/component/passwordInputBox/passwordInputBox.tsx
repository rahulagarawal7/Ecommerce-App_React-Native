import React, {useState} from 'react';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {EyeLogo, HiddenLogo} from '../../assets';

interface InputBoxProps {
  placeholder: string;
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  value?: string | null;
  editable?: boolean;
  keyboardType: string;
}

const PasswordInputBox: React.FC<InputBoxProps> = ({
  placeholder,
  containerStyle,
  onChangeText,
  value,
  editable,
  keyboardType,
}) => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholder={t(placeholder)}
        placeholderTextColor={colors.textColor}
        style={styles.text}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={show}
      />
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Image source={show ? HiddenLogo : EyeLogo} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInputBox;

const styles = StyleSheet.create({
  container: {
    height: ms(56),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.textColor,
    width: ms(300),
    height: ms(35),
    fontSize: ms(16),
    fontWeight: '400',
  },
  image: {
    height: ms(20),
    width: ms(20),
    marginRight: ms(5),
  },
});
