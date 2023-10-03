import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
    const navigation=useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={()=>navigation.navigate('Home')} style={{fontSize: 50, fontWeight: 'bold', color:'black'}}> Contact Page</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
