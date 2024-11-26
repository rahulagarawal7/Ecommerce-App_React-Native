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

interface SignUpProps {
  navigation: NavigationProp<RootStackParamList>;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSignUp = () => {
    if (!email || !password || !name || !phone) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User account created & signed in!');
        Alert.alert('Success', 'Account created successfully & signed in!');

        // Add user name and phone to Firebase Authentication
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL: phone.toString(),
          })
          .then(() => {
            console.log('User profile updated!');
            dispatch(addUserInfo(user));
          })
          .catch(error => console.error('Error updating profile:', error));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', 'Something went wrong!');
        }
        console.error(error);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputBox}>
        <InputBox
          placeholder="name"
          containerStyle={styles.input}
          onChangeText={setName}
        />
        <InputBox
          placeholder="phone"
          containerStyle={styles.input}
          onChangeText={setPhone}
        />
        <InputBox
          placeholder="email"
          containerStyle={styles.input}
          onChangeText={setEmail}
        />
        <InputBox
          placeholder="password"
          containerStyle={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
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

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  heading: {
    color: colors.textColor,
    fontSize: ms(33),
    padding: ms(20),
    marginVertical: '10%',
  },
  inputBox: {
    gap: 10,
  },
  input: {
    marginBottom: 10,
  },
  createText: {
    width: ms(342),
    alignSelf: 'center',
    marginTop: 10,
    color: colors.textColor,
  },
  textOne: {
    color: colors.tintColor,
  },
});
