import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FoodScanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Scanner (stub)</Text>
      <Text>Requires API setup to work.</Text>
    </View>
  );
}
const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center',padding:20}, title:{fontSize:20} });
