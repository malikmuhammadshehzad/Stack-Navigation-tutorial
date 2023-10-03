import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const About = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={()=>navigation.navigate('Contact')} style={{fontSize: 50, fontWeight: 'bold' , color:'black'}}>About Page </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
