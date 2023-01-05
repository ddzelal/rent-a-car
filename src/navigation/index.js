import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import { useQuery } from 'react-query';
import { getData } from '../utils/asyncStorageService';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { data, isLoading } = useQuery('token', async () => getData('TOKEN'));
  const initialRouteName = data ? 'Login' : 'Home';
  // when finish login change after line

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Navigation;
