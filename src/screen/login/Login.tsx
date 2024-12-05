import {Image, ScrollView, StyleSheet, Text, View, Alert, Modal, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {colors, ms} from '../../utils';
import {Button, InputBox} from '../../component';
import {AppleLogo, FacebookLogo, GoogleLogo} from '../../assets';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {t} from 'i18next';
import {RootStackParamList} from '../../navigation/types';
import {screenNames, showShankBar} from '../../utils/constants';

import auth from '@react-native-firebase/auth';
import PasswordInputBox from '../../component/passwordInputBox/passwordInputBox';
import {styles} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/slices/loading/loadingSlice';

const Login = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch()
 const loading = useSelector(store=>store?.loading.loading)
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password!');
      return;
    }
    dispatch(setLoading(true));
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(successful => {
        dispatch(setLoading(false))

        console.log('User signed in successfully!');
        Alert.alert('Success', 'You are logged in!');
        console.log('successful---->', successful.user.displayName);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-credential') {
          dispatch(setLoading(false))
          Alert.alert('Error', 'wrong Password or Email!');
        } else {
          Alert.alert('Network Error', 'Try after some time!');
          dispatch(setLoading(false))
        }
      }
  
    );
  };

  return (
    <ScrollView style={styles.container}>
      {loading &&  <Modal transparent={loading} animationType="fade" visible={true}>
        <View style={styles.modalContainer}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#6200EE" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </Modal>}
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.inputBox}>
        <InputBox
          placeholder="email"
          onChangeText={setEmail}
          keyboardType="text"
        />
        <PasswordInputBox
          keyboardType="text"
          placeholder="password"
          onChangeText={setPassword}
        />
        <Button buttonName="sign in" handleSubmit={handleLogin} />
      </View>
      <Text style={styles.createText}>
        {t("don't have account")}?{' '}
        <Text
          style={styles.textOne}
          onPress={() => navigation.navigate(screenNames.signUp)}>
          {t('create one')}
        </Text>
      </Text>
      <View style={styles.imgBox}>
        <Image source={GoogleLogo} style={styles.logo} />
        <Image source={FacebookLogo} style={styles.logo} />
        <Image source={AppleLogo} style={styles.logo} />
      </View>
    </ScrollView>
  );
};

export default Login;
