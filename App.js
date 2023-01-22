import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Pressable, Text, View, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';

const Stack = createNativeStackNavigator();

export default function App() {
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