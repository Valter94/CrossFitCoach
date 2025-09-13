import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CrossFit Coach</Text>
      <Button title="Start Workout" onPress={() => navigation.navigate('Workout')} />
      <Button title="Food Scan" onPress={() => navigation.navigate('Food Scan')} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex:1, justifyContent:'center', alignItems:'center' }, title:{fontSize:24, marginBottom:20} });
