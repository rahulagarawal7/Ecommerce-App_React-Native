import React, { useState, useEffect } from 'react';
import { Animated, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SearchIcon } from '../../assets'; // Make sure this path is correct
import { colors, ms } from '../../utils'; // Make sure this path is correct
import { t } from 'i18next';

interface SearchBarProps {
  placeholder: string;
}

const AnimatedSearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [counter, setCounter] = useState(0);
  const arr = ['tv', 'laptop', 'mobile', 'gaming', 'audio'];
  
  // Create an animated value for the opacity of the placeholder text
  const animatedOpacity = new Animated.Value(1);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(arr[counter]);

  useEffect(() => {
    // Set up interval to update placeholder text every 2 seconds
    const interval = setInterval(() => {
      // Fade out the placeholder (animation to 0 opacity)
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // After the fade-out animation completes, update the placeholder
      setTimeout(() => {
        setCurrentPlaceholder(arr[counter]);
        
        // Fade in the new placeholder (animation to 1 opacity)
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();

        // Increment counter and reset after the last item
        setCounter((prevCounter) => (prevCounter + 1) % arr.length);
      }, 300); // Delay to match the fade-out time

    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={SearchIcon} style={styles.searchImage} />
        {/* Animated view for the placeholder text */}

        <Text style={styles.placeholderText}>{t(placeholder)} {t('for')}</Text>
        <Animated.View
          style={ {opacity: animatedOpacity }}
        >
          <Text style={styles.placeholderText}>
            '{`${t(currentPlaceholder)}`}'
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimatedSearchBar;

const styles = StyleSheet.create({
  container: {
    height: ms(40),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    marginHorizontal: ms(10),
    alignItems:'center',
    gap:ms(5),
  },
  searchImage: {
    height: ms(16),
    width: ms(16),
    alignSelf: 'center',
    marginRight:ms(5)
  },
  placeholderContainer: {
   transform: [{ translateY: 20 }],
   alignSelf:'center',
   marginLeft:ms(10),
  },
  placeholderText: {
    color: colors.textColor,
    fontSize: ms(14),
  },
});
