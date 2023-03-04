import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';

const Stack = createNativeStackNavigator();

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name ="24-Game" component={Homescreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    );
  }
}
