import { Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const VerifyAccount = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    setTimeout(() => {
      navigation.replace('Login');
    }, 4000);
  }, []);

  return (
    <LinearGradient
      colors={['rgba(255, 245, 227, 1)', 'rgba(255, 255, 255, 1)']}
      style={styled.mainContainer}
    >
      <Text>Please verify your account..</Text>
      <Text>Check your email</Text>
    </LinearGradient>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerifyAccount;
