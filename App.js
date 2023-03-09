// Import the required libraries and components
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Define the colors and images for the screens
const colors = [
  {
    name: 'Blue',
    background: 'lightblue',
    text: 'darkblue',
    buttonColor: 'cornflowerblue',
    image: require('./assets/blue.png')
  },
  {
    name: 'Green',
    background: 'lightgreen',
    text: 'darkgreen',
    buttonColor: 'forestgreen',
    image: require('./assets/green.png')
  },
  {
    name: 'Red',
    background: 'mistyrose',
    text: 'darkred',
    buttonColor: 'red',
    image: require('./assets/red.png')
  },
];

// Define the Home screen component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the home screen for Colors.</Text>
      {colors.map((color) => (
        <View key={color.name} style={styles.buttonContainer}>
          <Button
            key={color.name}
            title={`GO TO ${color.name.toUpperCase()} SCREEN`}
            color={color.buttonColor}
            onPress={() => navigation.navigate(color.name)}
            style={styles.button}
          />
        </View>
      ))}
    </View>
  );
}

// Define the Color screen component
function ColorScreen({ route }) {
  const { name, background, text, image } = colors.find(
    (color) => color.name === route.name
  );

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={[styles.title, { color: text }]}>
        This is the {name} screen!
      </Text>
      <Image source={image} style={styles.image} />
    </View>
  );
}

// Define the stack navigator
const Stack = createStackNavigator();

// Define the App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lightgrey',
          },
          headerTintColor: 'purple',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        {colors.map((color) => (
          <Stack.Screen
            key={color.name}
            name={color.name}
            component={ColorScreen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  image: {
    width: '97%',
    height: 300,
    marginVertical: 20,
  },
  buttonContainer: {
    margin: 10,
    width: '50%',
  },
});