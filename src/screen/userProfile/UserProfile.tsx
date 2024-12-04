import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackButton, Button, ImageOption, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import {UserLogo} from '../../assets';
import {firebase} from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {addUserImage, addUserInfo} from '../../redux/slices/userSlice/userSlice';
import {setLoading} from '../../redux/slices/loading/loadingSlice';
import {LoadingState} from '../../redux/slices/types';
import {styles} from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { t } from 'i18next';

interface RootState {
  loading: LoadingState;
}

const UserProfile: React.FC = () => {
  const user = firebase.auth().currentUser;
  const dispatch = useDispatch();
  const loading = useSelector((store: RootState) => store?.loading?.loading);
  const userImage = useSelector(store=>store?.user.userImage);
  const [email, setEmail] = useState(user?.email || '');
  const [name, setName] = useState(user?.displayName || '');
  const [phone, setPhone] = useState(user?.photoURL || '');
  const [show,setShow]=useState(false);

  const handleSubmit = async () => {
    dispatch(setLoading(true));
    try {
      if (!user) {
        Alert.alert(t('error'), t('user not logged in.'));
        return;
      }

      await user.updateProfile({
        displayName: name,
        photoURL: phone,
      });

      await user.reload();
      Alert.alert(t('success'), t('profile updated successfully!'));
      console.log('Updated user:', firebase.auth().currentUser);
      dispatch(addUserInfo(firebase.auth().currentUser));
    } catch (error) {
      console.error('Error updating user profile:', error);
      Alert.alert(t('error'), t('failed to update profile.'));
    } finally {
      dispatch(setLoading(false));
    }
  };




  return (

    <TouchableWithoutFeedback onPress={()=>setShow(false)} >
<View style={styles.outerBox}>


    
          <Modal transparent={true} visible={loading} animationType="fade">
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={colors.tintColor} />
          <Text style={styles.loaderText}>{t('updating profile...')}</Text>
        </View>
      </Modal>
      <ScrollView>
        <BackButton heading={'back'} />
        <View style={styles.container}>
          <TouchableOpacity style={styles.userImageBox} 
          onPress={()=>setShow(!show)}
          >
        <Image source={userImage?.length>0 ? {uri:userImage} : UserLogo} style={styles.userImage} />
       
          </TouchableOpacity>

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

          <Button buttonName={t('update')} handleSubmit={handleSubmit} />
        </View>
      </ScrollView>
      {show && <ImageOption setShow={setShow} show={show}/>}

      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserProfile;
