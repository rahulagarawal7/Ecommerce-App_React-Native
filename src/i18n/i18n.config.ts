import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { en, fr, hi } from './translations';


const resources = {
  en: { translation: en },
  hi: { translation: hi },
  fr: { translation: fr },
};

const loadLanguage = async () => {
  const lang = await AsyncStorage.getItem('selectedLanguage');
  return lang || 'en'; 
};

export const changeLanguage = async (language:string) => {
  await AsyncStorage.setItem('selectedLanguage', language);
  i18next.changeLanguage(language);
  
  
};




export const initI18n = async () => {
  const defaultLang = await loadLanguage();
  
  return i18next
    .use(initReactI18next)
    .init({
      debug: false,
      lng: defaultLang,
      fallbackLng: 'en',
      resources,
      compatibilityJSON: 'v3',
      interpolation: {
        escapeValue: false, 
      },
    });
};

export default i18next;
