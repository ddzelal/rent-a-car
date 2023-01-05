import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import Typography from '../components/Typography';
import colors from '../theme/ColorPalette';
import text from '../theme/TypographyTypes';
import Logo from '../../assets/images/logoSvg.svg';

const SplashScreen = () => {
  return (
    <View style={styled.mainContainer}>
      <View style={styled.logoLight}>
        <Logo width={120} height={200} />
      </View>
      <View style={styled.logoContainer}>
        <Logo />
        <View
          style={{
            width: 183,
            margin: 18,
          }}
        >
          <Typography typeText={text.H4} color={colors.DARK_200}>
            Transportation License Portal
          </Typography>
        </View>
      </View>
      <View style={styled.loadingContainer}>
        <Text style={styled.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFCF4',
    position: 'relative',
  },
  logoPng: {
    width: 84,
    height: 110,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 44,
  },
  loadingText: {
    color: colors.DARK_300,
    fontFamily: 'GilmerRegular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 2,
  },
  logoLight: {
    position: 'absolute',
    left: 316,
    top: 145,
    transform: [{ rotate: '-22deg' }],
    opacity: 0.03,
    width: 171,
    height: 224,
  },
});

export default SplashScreen;
