import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Pressable, Text, View, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';

const Stack = createNativeStackNavigator();

function Welcome(props) {
  return <Text>Welcome to hogwarts, {props.name}</Text>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <NavigationContainer>
       <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name ="Home" component={Homescreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
   
  );
}