import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {
  addUserImage,
  removeUserImage,
} from '../../redux/slices/userSlice/userSlice';
import {showShankBar} from '../../utils/constants';
import {t} from 'i18next';

interface ImageOptionProp {
  setShow: Function;
  show: boolean;
}

const ImageOption: React.FC<ImageOptionProp> = ({setShow, show}) => {
  const dispatch = useDispatch();

  const handleCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (image) {
        saveUserImage(image.path);
      }
    });
  };

  const handleGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('0----->', image.path);
      if (image) {
        saveUserImage(image.path);
      }
    });
  };
  console.log('78787878');
  const saveUserImage = async (image: string) => {
    try {
      await AsyncStorage.setItem('userImage', JSON.stringify(image));
      console.log('usermaage----', image);
      dispatch(addUserImage(image));
      setShow(!show);

      showShankBar(t('added user profile photo'));
    } catch (error) {
      Alert.alert(t('failed to save image'));
    }
  };

  const handleDelete = () => {
    dispatch(removeUserImage());
    showShankBar(t('deleted user Image'));
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text} onPress={handleGallery}>
          {t('add from gallery')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text} onPress={handleCamera}>
          {t('add from camera')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={handleDelete}>
        <Text style={styles.delete}>{t('delete')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageOption;

const styles = StyleSheet.create({
  container: {
    height: ms(210),
    width: '100%',
    backgroundColor: colors.tintColor,
    alignSelf: 'center',
    opacity: 1,
    position: 'absolute',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: ms(0),
    borderWidth: 0.5,
    justifyContent: 'space-between',
    paddingVertical: ms(30),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  text: {
    color: colors.textColor,
    fontSize: ms(18),
    fontWeight: '700',
    textAlign: 'center',
  },
  box: {
    height: ms(40),
    width: ms(300),
    borderRadius: 10,
    backgroundColor: colors.cardBgColor,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  delete: {
    color: colors.error,
    fontSize: ms(18),
    fontWeight: '700',
    textAlign: 'center',
  },
});
