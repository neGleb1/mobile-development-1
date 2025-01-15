import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [lowPulse, setLowPulse] = useState(0);
  const [highPulse, setHighPulse] = useState(0);

  const calculate = () => {
    setLowPulse((220 - age) * 0.65)
    setHighPulse((220 - age) * 0.85)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Enter your age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={value => setAge(value)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Your pulse limits</Text>
      <Text style={styles.field}>{lowPulse + ' - ' + highPulse}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    margin: 10
  }
});
