import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton} from '../../component';
import {colors, ms} from '../../utils';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const cityIInfoList = [
  {id: 1, name: 'Indore', longitude: '73.567890', latitude: '22.123456'},
  {id: 2, name: 'Bhopal', longitude: '-77.123456', latitude: '23.456789'},
  {id: 3, name: 'Raipur', longitude: '81.987654', latitude: '-21.234567'},
  {id: 4, name: 'Delhi', longitude: '77.123456', latitude: '28.704060'},
  {id: 5, name: 'Mumbai', longitude: '72.877656', latitude: '19.076090'},
  {id: 6, name: 'Kolkata', longitude: '88.363895', latitude: '22.572646'},
  {id: 7, name: 'Chennai', longitude: '80.270718', latitude: '13.082680'},
  {id: 8, name: 'Bangalore', longitude: '77.594566', latitude: '12.971599'},
  {id: 9, name: 'Hyderabad', longitude: '78.486671', latitude: '17.385044'},
];

const Explore = () => {
  const getUserCurrentLocation = () => {
    Geolocation.getCurrentPosition(positon => {
      console.log('aaaaa', positon);
    });
  };

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('granted');
          getUserCurrentLocation();
        } else {
          Alert.alert(
            'permission Denied',
            'location permmission is requiired too show your current location',
          );
        }
      } catch (err) {
        console.log('err-', err);
      }
    } else {
      console.log('ios--', Platform.OS);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backButton}>
        <BackButton />
      </View>

      <View style={styles.cityNameBox}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 10}}
          data={cityIInfoList}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.cityBox}>
                <Text style={styles.textCity}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  mapStyle: {
    height: '100%',
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    paddingHorizontal: ms(10),
    paddingVertical: ms(10),
    zIndex: 1,
    flexDirection: 'row',
  },
  cityNameBox: {
    position: 'absolute',
    zIndex: 1,
    marginHorizontal: ms(60),
    marginVertical: ms(10),
    width: ms(290),
    height: ms(40),
  },
  cityBox: {
    backgroundColor: colors.cardBgColor,
    alignSelf: 'center',
    height: ms(30),
    justifyContent: 'center',
    paddingHorizontal: ms(10),
    borderRadius: ms(20),
  },
  textCity: {
    color: colors.textColor,
    fontSize: ms(12),
    fontWeight: '400',
  },
});
