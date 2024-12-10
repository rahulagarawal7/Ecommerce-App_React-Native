import {
 
  Dimensions,
  FlatList,
  Image,

  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { carouselData, colors } from '../../utils/constants';
import { ms } from '../../utils';

const windowWidth = Dimensions.get('window').width;

const renderItem = ({ item }) => {
  return (
    <View style={styles.box}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

const CursorBox = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const handleScroll = (event) => {
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
        renderItem={renderItem}
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
    alignSelf: 'center'
    
  },
  activeDot: {
    backgroundColor: colors.tintColor,
  },
  inActiveDot: {
    backgroundColor: colors.cardBgColor,
  },
});
