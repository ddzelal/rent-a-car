import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/images/logoSvg.svg';
import React, { useLayoutEffect } from 'react';
import Typography from '../components/Typography';
import colors from '../theme/ColorPalette';
import typeText from '../theme/TypographyTypes';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../components/Input';

const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <LinearGradient
      colors={['rgba(255, 245, 227, 1)', 'transparent']}
      style={styled.mainContainer}
    >
      <Logo />
      <Typography typeText={typeText.P3} color={colors.DARK_200}>
        A front line government agency showcasing fast and efficient public
        service for a progressive land transport sector.
      </Typography>
      <View style={{ width: '100%' }}>
        <Typography typeText={typeText.H3} color={colors.DARK_100}>
          Login
        </Typography>
      </View>
      <Input />
      <Input />
    </LinearGradient>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default Login;
