
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';


export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Mike.</Text>
      
      <TextInput style={styles.input}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 50,
        paddingVertical: 70,
        
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: 'white',
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
    }
});