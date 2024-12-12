import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/constants';
import {ms} from '../../utils';

const windowWidth = Dimensions.get('window').width;

const carouselData = [
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUto_vwUBQc_uwqz4Alcj9n_CQ7ZQVQYA6g&s',
  },
  {
    id: 4,
    image:
      'https://cdn.pixabay.com/photo/2016/06/25/12/50/handbag-1478814_640.jpg',
  },

  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {id: 1, image: 'https://images6.alphacoders.com/394/thumb-1920-394174.jpg'},

  {
    id: 4,
    image:
      'https://cdn.pixabay.com/photo/2016/06/25/12/50/handbag-1478814_640.jpg',
  },
];
const RenderItem = ({item}) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.box}>
      {loading && (
        <View style={styles.loadingBox}>
          <ActivityIndicator size="large" color={colors.tintColor} />
        </View>
      )}

      <Image
        onLoad={() => {
          setLoading(false);
        }}
        source={{uri: item.image}}
        style={styles.image}
      />
    </View>
  );
};

const CursorBox = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / windowWidth);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={carouselData}
        renderItem={({item}) => <RenderItem item={item} />}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(_, index) => index.toString()}
      />
      <View style={styles.dotContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              activeIndex === index ? styles.activeDot : styles.inActiveDot,
              styles.dotBox,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CursorBox;

const styles = StyleSheet.create({
  image: {
    height: ms(220),
    width: windowWidth,
  },
  dotBox: {
    height: ms(10),
    width: ms(10),
    borderRadius: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: ms(20),
    gap: 5,
    width: 30,
    alignSelf: 'center',
  },
  activeDot: {
    backgroundColor: colors.tintColor,
  },
  inActiveDot: {
    backgroundColor: colors.cardBgColor,
  },
  loadingBox: {
    height: ms(220),
    width: windowWidth,
    backgroundColor: colors.loadingBgColor,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
  },
  box: {
    position: 'relative',
  },
});
