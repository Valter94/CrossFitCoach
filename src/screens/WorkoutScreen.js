import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WorkoutScreen() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  React.useEffect(() => {
    let t;
    if (running) t = setInterval(()=> setTime(s=>s+1),1000);
    return ()=> clearInterval(t);
  },[running]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Timer</Text>
      <Text style={styles.timer}>{time} sec</Text>
      <Button title={running? 'Stop':'Start'} onPress={()=>setRunning(r=>!r)} />
      <Button title="Reset" onPress={()=>setTime(0)} />
    </View>
  );
}
const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center'}, title:{fontSize:20}, timer:{fontSize:32, margin:16} });
