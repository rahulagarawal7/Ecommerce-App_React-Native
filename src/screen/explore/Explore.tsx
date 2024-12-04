import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../../component';
import { colors, ms } from '../../utils';

const Explore = () => {
  return (
    <View style={styles.container}>
      <BackButton  heading="back"/>
      <ScrollView style={styles.scroll}>
      <Text>Map</Text>
      </ScrollView>
    
    </View>
  )
}

export default Explore;

const styles = StyleSheet.create({
  scroll:{
    marginTop:ms(10),
    
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:colors.primaryBgColor,
  }
});