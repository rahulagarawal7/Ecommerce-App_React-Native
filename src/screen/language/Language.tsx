import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {languages, colors, ms} from '../../utils';
import {BackButton} from '../../component';
import RNRestart from 'react-native-restart';
import {useDispatch} from 'react-redux';
import {changeLang} from '../../redux/slices/LanguageSlice';

interface LanguageType {
  name: string;
  code: string;
}

const Language: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('english');
  const [languageChanged, setLanguageChanged] = useState<boolean>(false);
  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLangCode = await AsyncStorage.getItem('selectedLanguage');
        if (savedLangCode) {
          const selectedLang = languages.find(
            lang => lang.code === savedLangCode,
          );
          if (selectedLang) {
            setSelectedOption(selectedLang.name);
            i18n.changeLanguage(savedLangCode);
          }
        }
      } catch (error) {
        console.error('Error loading language from storage:', error);
      }
    };

    loadLanguage();
  }, [languageChanged]);

  const handleSelect = async (lang: LanguageType) => {
    const {name, code} = lang;
    setSelectedOption(name);
    i18n.changeLanguage(code);
    setLanguageChanged(prev => !prev);

    try {
      await AsyncStorage.setItem('selectedLanguage', code);
      dispatch(changeLang(name));
      RNRestart.Restart();
    } catch (error) {
      console.error('Error saving language to storage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <BackButton heading={t('back')} />
      <View style={styles.box}>
        {languages.map(lang => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.innerBox,
              selectedOption === lang.name && styles.selectedBox,
            ]}
            onPress={() => handleSelect(lang)}>
            <Text style={styles.text}>{t(lang.name)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBgColor,
  },
  text: {
    fontSize: ms(18),
    fontWeight: '500',
    marginLeft: ms(10),
  },
  box: {
    width: ms(342),
    alignSelf: 'center',
    marginTop: ms(20),
    gap: ms(10),
  },
  innerBox: {
    backgroundColor: colors.secondaryBgColor,
    paddingVertical: ms(15),
    justifyContent: 'center',
    borderRadius: 15,
  },
  selectedBox: {
    borderColor: colors.selectedBorderColor,
    borderWidth: 2,
  },
});
