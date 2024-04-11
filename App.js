import React from 'react';
// import { ScreenOrientation } from 'expo';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Alert, TouchableNativeFeedback } from 'react-native';
import Main from './src/components/Main.jsx'
export default function App() {
  return (
      <View style={styles.container}>
        <Main></Main>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})