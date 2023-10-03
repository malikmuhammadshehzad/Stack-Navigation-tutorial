import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import About from './About';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('About')}
        style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
        Home Page{' '}
      </Text>
    </View>
  );
};

export default Home;
