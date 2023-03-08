import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';

const Stack = createNativeStackNavigator();

import React from 'react';
import MainMenu from './screens/MainMenu';

export default class App extends React.Component {
  render() {
      return (
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator
            initialRouteName="24 GAME">
            <Stack.Screen name ="24 GAME" 
                          options={{headerStyle: { backgroundColor: '#483d8b', },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontWeight: 'bold',
                                      fontSize: 25
                                    },
                                    headerTitleAlign: 'center'}} 
                          component={Homescreen} />
            <Stack.Screen name = "MainMenu" navigation={this.navigation} options={{headerShown: false}} component={MainMenu} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    );
  }
}