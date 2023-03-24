import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';

const Stack = createNativeStackNavigator();

import React from 'react';
import MainMenu from './screens/MainMenu';
import Leaderboard from './screens/Leaderboard';
import Account from './screens/Account';

class App extends React.Component {
  render() {
      return (
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator initialRouteName='MainMenu'>
          <Stack.Screen name = "MainMenu"  options={{headerStyle: { backgroundColor: '#483d8b', },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontWeight: 'bold',
                                      fontSize: 25
                                    },
                                    headerTitleAlign: 'center'}}  component={MainMenu} />
          <Stack.Screen name = "Leaderboard" options={{headerStyle: { backgroundColor: '#483d8b', },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontWeight: 'bold',
                                      fontSize: 25
                                    },
                                    headerTitleAlign: 'center'}} component={Leaderboard} />
          <Stack.Screen name = "Account" options={{headerStyle: { backgroundColor: '#483d8b', },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontWeight: 'bold',
                                      fontSize: 25
                                    },
                                    headerTitleAlign: 'center'}} component={Account} />
          <Stack.Screen name ="24 GAME" 
                          options={{headerStyle: { backgroundColor: '#483d8b', },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                      fontWeight: 'bold',
                                      fontSize: 25
                                    },
                                    headerTitleAlign: 'center'}} 
                          component={Homescreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    );
  }
}

export default App;