import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import { useQuery } from 'react-query';
import { getData } from '../utils/asyncStorageService';
import ForgotPassword from '../screens/ForgotPassword';
import VerificationCode from '../screens/VerificationCode';
import ResetPassword from '../screens/ResetPassword';
import CreateAnAccount from '../screens/CreateAnAccount';
import VerifyAccount from '../screens/VerifyAccount';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { data, isLoading } = useQuery('getData', async () =>
    getData('USER_EMAIL'),
  );

  const initialRouteName = data ? 'Home' : 'Login';

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen
              name="VerificationCode"
              component={VerificationCode}
            />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreateAnAccount" component={CreateAnAccount} />
            <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Navigation;
