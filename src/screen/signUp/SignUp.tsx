import {
  ScrollView,
  Text,
  View,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Button, InputBox} from '../../component';
import {t} from 'i18next';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {addUserInfo} from '../../redux/slices/userSlice/userSlice';
import PasswordInputBox from '../../component/passwordInputBox/passwordInputBox';
import {styles} from './styles';
import {showShankBar} from '../../utils/constants';
import {setLoading} from '../../redux/slices/loading/loadingSlice';
import {LoadingState} from '../../redux/slices/types';

interface loadingRootState {
  loading: LoadingState;
}

interface SignUpProps {
  navigation: NavigationProp<RootStackParamList>;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(
    (store: loadingRootState) => store?.loading.loading,
  );
  const handleSignUp = async () => {
    if (!email || !password || !name || !phone) {
      Alert.alert(t('error'), t('Please fill all fields!'));
      return;
    }
    if (name.length < 3) {
      showShankBar(t('Name must be more the 3 character'));
      return;
    }
    if (phone.length > 10 || phone.length < 10) {
      showShankBar(t('Enter valid phone number'));
      return;
    }
    if (password.length < 6) {
      showShankBar(t('Enter valid password'));
      return;
    }
    dispatch(setLoading(true));
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      const currentUser = auth().currentUser;
      dispatch(setLoading(false));
      if (currentUser) {
        await currentUser.updateProfile({
          displayName: name,
          photoURL: phone.toString(),
        });

        await currentUser.reload();

        dispatch(addUserInfo(auth().currentUser));
        dispatch(setLoading(false));

        Alert.alert(t('success'), t('user registered successfully!'));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('error during sign up:', error);
        dispatch(setLoading(false));
        Alert.alert(t('error'), error.message);
      } else {
        console.error('error during sign up:', error);
        dispatch(setLoading(false));
        Alert.alert(t('error'), t('an error occurred during sign up'));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ScrollView style={styles.container}>
      {loading && (
        <Modal transparent={loading} animationType="fade" visible={true}>
          <View style={styles.modalContainer}>
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color="#6200EE" />
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          </View>
        </Modal>
      )}
      <Text style={styles.heading}>{t('sign up')}</Text>
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
        <Button buttonName="sign up" handleSubmit={handleSignUp} />
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
