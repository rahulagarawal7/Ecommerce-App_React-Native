import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {colors, ms} from '../../utils';
import {Button, InputBox} from '../../component';
import {t} from 'i18next';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {addUserInfo} from '../../redux/slices/userSlice/userSlice';
import PasswordInputBox from '../../component/passwordInputBox/passwordInputBox';
import {styles} from './styles';
import {showShankBar} from '../../utils/constants';

interface SignUpProps {
  navigation: NavigationProp<RootStackParamList>;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if (!email || !password || !name || !phone) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }
    if (name.length < 3) {
      showShankBar('Name must be more the 3 character');
      return;
    }
    if (phone.length > 10 || phone.length < 10) {
      showShankBar('Enter valid phone number');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      const currentUser = auth().currentUser;

      if (currentUser) {
        await currentUser.updateProfile({
          displayName: name,
          photoURL: phone.toString(),
        });

        await currentUser.reload();

        dispatch(addUserInfo(auth().currentUser));

        Alert.alert('Success', 'User registered successfully!');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error during sign up:', error);
        Alert.alert(t('error'), error.message);
      } else {
        console.error('Error during sign up:', error);
        Alert.alert(t('Error'), t('an error occurred during sign up'));
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputBox}>
        <InputBox
          keyboardType="text"
          placeholder="name"
          containerStyle={styles.input}
          onChangeText={setName}
        />
        <InputBox
          keyboardType="numeric"
          placeholder="phone"
          containerStyle={styles.input}
          onChangeText={setPhone}
        />
        <InputBox
          keyboardType="text"
          placeholder="email"
          containerStyle={styles.input}
          onChangeText={setEmail}
        />
        <PasswordInputBox
          keyboardType="password"
          placeholder="password"
          containerStyle={styles.input}
          onChangeText={setPassword}
        />
        <Button buttonName="Sign Up" handleSubmit={handleSignUp} />
      </View>
      <Text style={styles.createText}>
        {t('already have account')}?{' '}
        <Text
          style={styles.textOne}
          onPress={() => navigation.navigate('Login')}>
          {t('sign in')}
        </Text>{' '}
      </Text>
    </ScrollView>
  );
};

export default SignUp;
