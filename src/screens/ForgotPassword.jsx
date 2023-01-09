import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import Typography from '../components/Typography';
import typeText from '../theme/TypographyTypes';
import colors from '../theme/ColorPalette';
import { Input } from '../components/Input';
import sms from '../../assets/icons/sms.png';
import Button from '../components/Button';
import { fetchForgotPassword } from '../../api';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTransparent: true, title: '' });
  }, []);

  const [email, setEmail] = useState({ email: '' });
  const [isCorrect, setIsCorrect] = useState(true);
  const handleEmail = async () => {
    const data = await fetchForgotPassword(email);
    data?.status
      ? navigation.navigate('VerificationCode', { email: email })
      : setIsCorrect(false);
  };
  return (
    <View style={styled.mainContainer}>
      <View style={{ marginTop: 100 }}>
        <Typography
          color={colors.DARK_100}
          typeText={typeText.H3}
          textAlign="left"
        >
          Forgot password?
        </Typography>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Typography
          typeText={typeText.P3}
          color={colors.DARK_200}
          textAlign="left"
        >
          Please enter your email address to reset your password.
        </Typography>
      </View>
      <View>
        <Input
          state={email}
          setState={setEmail}
          icon={sms}
          placeholder="Enter Email Address"
          type={'email'}
          isCorrect={isCorrect}
        />
      </View>
      <TouchableOpacity onPress={handleEmail}>
        <Button title="Send Email" />
      </TouchableOpacity>
    </View>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default ForgotPassword;
