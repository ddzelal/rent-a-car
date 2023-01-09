import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import Typography from '../components/Typography';
import typeText from '../theme/TypographyTypes';
import colors from '../theme/ColorPalette';
import Button from '../components/Button';
import { InputPassword } from '../components/InputPassword';
import pass from '../../assets/icons/lock.png';
import eyeInv from '../../assets/icons/eyeInvisible.png';
import { fetchChangeNewPassword } from '../../api';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = ({ route }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTransparent: true, title: '' });
  }, []);
  const {
    code,
    email: { email },
  } = route?.params || undefined;

  const [isCorrect, setIsCorrect] = useState(true);
  const [user, setUser] = useState({
    code: code,
    new_password: '',
    new_password_second: '',
    email: email,
  });

  const handleChangeNewPassword = () => {
    if (user.new_password === user.new_password_second) {
      fetchChangeNewPassword(user).then((res) => {
        res ? navigation.navigate('Login') : navigation.goBack();
      });
    } else {
      setIsCorrect(false);
    }
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
          Please enter your new password and confirm the new password.
        </Typography>
      </View>
      <View>
        <InputPassword
          icon={pass}
          iconEnd={eyeInv}
          setState={setUser}
          state={user}
          type="new_password"
          placeholder={'New password'}
          isCorrect={isCorrect}
        />
        <InputPassword
          icon={pass}
          iconEnd={eyeInv}
          setState={setUser}
          state={user}
          type="new_password_second"
          placeholder={'Confirm new password'}
          isCorrect={isCorrect}
        />
      </View>
      <TouchableOpacity onPress={handleChangeNewPassword}>
        <Button title="Update new password" />
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

export default ResetPassword;
