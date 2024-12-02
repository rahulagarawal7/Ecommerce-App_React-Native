import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackButton, Button, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import {UserLogo} from '../../assets';
import {firebase} from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {addUserInfo} from '../../redux/slices/userSlice/userSlice';
import {setLoading} from '../../redux/slices/loading/loadingSlice';
import {LoadingState} from '../../redux/slices/types';
import {styles} from './styles';

interface RootState {
  loading: LoadingState;
}

const UserProfile: React.FC = () => {
  const user = firebase.auth().currentUser;
  const dispatch = useDispatch();
  const loading = useSelector((store: RootState) => store?.loading?.loading);

  const [email, setEmail] = useState(user?.email || '');
  const [name, setName] = useState(user?.displayName || '');
  const [phone, setPhone] = useState(user?.photoURL || '');

  const handleSubmit = async () => {
    dispatch(setLoading(true));
    try {
      if (!user) {
        Alert.alert('Error', 'User not logged in.');
        return;
      }

      await user.updateProfile({
        displayName: name,
        photoURL: phone,
      });

      await user.reload();
      Alert.alert('Success', 'Profile updated successfully!');
      console.log('Updated user:', firebase.auth().currentUser);
      dispatch(addUserInfo(firebase.auth().currentUser));
    } catch (error) {
      console.error('Error updating user profile:', error);
      Alert.alert('Error', 'Failed to update profile.');
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <View style={styles.outerBox}>
      <Modal transparent={true} visible={loading} animationType="fade">
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={colors.tintColor} />
          <Text style={styles.loaderText}>Updating Profile...</Text>
        </View>
      </Modal>
      <ScrollView>
        <BackButton heading={'back'} />
        <View style={styles.container}>
          <View style={styles.userImageBox}>
            <Image source={UserLogo} style={styles.userImage} />
          </View>

          <InputBox
            placeholder="name"
            value={name}
            onChangeText={setName}
            keyboardType="text"
          />
          <InputBox
            placeholder="phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="number"
          />

          <InputBox
            keyboardType="text"
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            editable={false}
          />

          <Button buttonName="Update" handleSubmit={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
