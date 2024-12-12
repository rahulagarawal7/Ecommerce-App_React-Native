import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton} from '../../component';
import {colors, ms} from '../../utils';
import MapView, {Circle, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {cityInfoList, rangeList, storeList} from '../../utils/constants';

const Explore = () => {
  const [location, setLocation] = useState();
  const [cityId, setCityId] = useState(null);
  const [rangeId, setRangeId] = useState(null);
  const [region, setRegion] = useState({
    latitude: 21.7679,
    longitude: 78.8718,
    latitudeDelta: 10.0,
    longitudeDelta: 10.0,
  });

  const getUserCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => {
      console.log('aaaaa', position);
      setLocation({
        latitude: position.coords.altitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.18,
        longitudeDelta: 0.18,
      });
    });
  };
  const handleRageSelected = (index: number) => {
    setRangeId(index);
  };
  const handleCitySelected = id => {
    const selectedCity = cityInfoList.find(city => city.id === id);
    setCityId(id);
    //  setRangeId(null); // Reset range when city is selected
    if (selectedCity) {
      // Focus on the selected city
      setRegion({
        latitude: selectedCity.latitude,
        longitude: selectedCity.longitude,
        latitudeDelta: 0.18, // Adjust to zoom level
        longitudeDelta: 0.18, // Adjust to zoom level
      });
    }
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
      getUserCurrentLocation();
    }
  };
  const city = cityInfoList.find(item => item.id === cityId);
  const range = rangeList.find(item => item.id === rangeId);
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
          data={cityInfoList}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.cityBox,
                  item.id === cityId && styles.selectedCity,
                ]}
                onPress={() => handleCitySelected(item.id)}>
                <Text
                  style={[
                    styles.textCity,
                    item.id === cityId && styles.selectedCityText,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.cityRangeBox}>
        {cityId && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 10}}
            data={rangeList}
            horizontal
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.rangeBox,
                    item.id === rangeId && styles.selectedCity,
                  ]}
                  onPress={() => handleRageSelected(item.id)}>
                  <Text
                    style={[
                      styles.textCity,
                      item.id === rangeId && styles.selectedCityText,
                    ]}>
                    {item.range}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>

      <MapView
        region={region}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 21.7679,
          longitude: 78.8718,
          latitudeDelta: 10.0,
          longitudeDelta: 10.0,
        }}
        showsUserLocation={true}>
        {cityId &&
          storeList[cityId].map(store => {
            return (
              <Marker
                key={store.id}
                coordinate={{
                  latitude: store.latitude,
                  longitude: store.longitude,
                  latitudeDelta: 10.0,
                  longitudeDelta: 10.0,
                }}
                title={store.name}
                description={store.description}
              />
            );
          })}
        {cityId && city && rangeId && range && (
          <Circle
            center={{
              latitude: city.latitude,
              longitude: city.longitude,
            }}
            radius={range.rangeMeter || 20000}
            strokeWidth={2}
            strokeColor="rgba(0,0,0,0.5)"
            fillColor="rgba(0,0,0,0.1)"
          />
        )}
      </MapView>
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
    // backgroundColor: 'red',
    width: ms(53),
  },
  cityNameBox: {
    position: 'absolute',
    zIndex: 1,
    marginHorizontal: ms(60),
    marginVertical: ms(10),
    width: ms(260),
    height: ms(40),

    // backgroundColor: 'green',
  },
  cityRangeBox: {
    position: 'absolute',
    zIndex: 1,
    marginHorizontal: ms(40),
    marginVertical: ms(50),
    width: ms(290),
    height: ms(40),
    // backgroundColor: 'red',
  },
  cityBox: {
    backgroundColor: colors.cardBgColor,
    alignSelf: 'center',
    height: ms(30),
    justifyContent: 'center',
    paddingHorizontal: ms(10),
    borderRadius: ms(20),
  },
  rangeBox: {
    backgroundColor: colors.cardBgColor,
    alignSelf: 'center',
    height: ms(20),
    justifyContent: 'center',
    paddingHorizontal: ms(10),
    borderRadius: ms(20),
  },
  textCity: {
    color: colors.textColor,
    fontSize: ms(12),
    fontWeight: '400',
  },
  selectedCity: {
    backgroundColor: colors.tintColor,
  },
  selectedCityText: {
    color: colors.primaryBgColor,
  },
});
