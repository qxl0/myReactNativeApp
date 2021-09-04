import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Show me the Details screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" 
        onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Details" component={Details} />
      </stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
