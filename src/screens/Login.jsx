import Checkbox from 'expo-checkbox';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/images/logoSvg.svg';
import React, { useLayoutEffect, useState } from 'react';
import Typography from '../components/Typography';
import colors from '../theme/ColorPalette';
import typeText from '../theme/TypographyTypes';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../components/Input';
import sms from '../../assets/icons/sms.png';
import pass from '../../assets/icons/lock.png';
import eyeInv from '../../assets/icons/eyeInvisible.png';
import { InputPassword } from '../components/InputPassword';
import Button from '../components/Button';
import { getData, storeData } from '../utils/asyncStorageService';
import { fetchLogin } from '../../api';
import ButtonLight from '../components/ButtonLight';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const goLogin = async () => {
    const data = await fetchLogin(user);
    if (data?.status) {
      await storeData('TOKEN', data?.data?.access_token);
      await storeData('REFRESH', data?.data?.refresh_token);
      navigation.navigate('Home');
      await getData('TOKEN');
    } else {
      setIsCorrect(false);
    }
    if (data === 403) navigation.navigate('VerifyAccount');
  };
  return (
    <LinearGradient
      colors={['rgba(255, 245, 227, 1)', 'rgba(255, 255, 255, 1)']}
      style={styled.mainContainer}
    >
      <View style={{ alignItems: 'center', marginVertical: 30 }}>
        <View style={{ marginVertical: 30 }}>
          <Logo />
        </View>
        <Typography
          typeText={typeText.P3}
          color={colors.DARK_200}
          textAlign="center"
        >
          A front line government agency showcasing fast and efficient public
          service for a progressive land transport sector.
        </Typography>
      </View>
      <View style={{ width: '100%' }}>
        <View style={{ marginVertical: 10 }}>
          <Typography
            textAlign="left"
            typeText={typeText.H3}
            color={colors.DARK_100}
          >
            Login
          </Typography>
        </View>
      </View>
      <Input
        icon={sms}
        setState={setUser}
        state={user}
        type="email"
        placeholder={'Email address'}
        isCorrect={isCorrect}
      />
      <InputPassword
        icon={pass}
        iconEnd={eyeInv}
        setState={setUser}
        state={user}
        type="password"
        placeholder={'Password'}
        isCorrect={isCorrect}
      />
      <View style={styled.passSettingContainer}>
        <View style={styled.settingsPassLeft}>
          <Checkbox
            style={{ marginRight: 10 }}
            value={isChecked}
            onValueChange={setIsChecked}
          />
          <Typography color={colors.DARK_200} typeText={typeText.P3}>
            Remember me
          </Typography>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Typography typeText={typeText.P3} color={colors.DARK_200}>
            Forgot Password?
          </Typography>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goLogin} style={{ width: '100%' }}>
        <Button title="Login" />
      </TouchableOpacity>
      <View style={{ width: '100%' }}>
        <Typography color={colors.DARK_300} typeText={typeText.P2}>
          Don’t have an account?
        </Typography>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateAnAccount')}
        >
          <ButtonLight title="Sign up" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  passSettingContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsPassLeft: {
    flexDirection: 'row',
  },
});

export default Login;
