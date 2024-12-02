import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackArrowLogo} from '../../assets';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './style';

interface AddButtonCardProps {
  title: string;
  screenName: keyof RootStackParamList;
}

const AddButtonCard: React.FC<AddButtonCardProps> = ({title, screenName}) => {
  const {t} = useTranslation();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePressed = () => {
    navigation.navigate(screenName as string, undefined);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePressed()}>
      <Text style={styles.text}>{t(title)}</Text>
      <Image source={BackArrowLogo} style={styles.image} />
    </TouchableOpacity>
  );
};

export default AddButtonCard;
