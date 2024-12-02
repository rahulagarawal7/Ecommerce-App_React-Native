import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {Button} from '../../component';
import {t} from 'i18next';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {styles} from './styles';
interface EmptyPageProps {
  title: string;
  image: ImageSourcePropType;
  btnName: string;
  style?: StyleProp<ViewStyle>;
  navigationScreeName?: keyof RootStackParamList;
  btn?: boolean;
}

const EmptyPage: React.FC<EmptyPageProps> = ({
  title,
  image,
  btnName,
  style,
  btn,
  navigationScreeName,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSubmit = () => {
    if (navigationScreeName) {
      navigation.navigate(navigationScreeName as string, undefined);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{t(title)}</Text>
      {btn && <Button buttonName={btnName} handleSubmit={handleSubmit} />}
    </View>
  );
};

export default EmptyPage;
