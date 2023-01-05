import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import iconTest from '../../assets/icons/call.png';
import colors from '../theme/ColorPalette';
import textType from '../theme/TypographyTypes';

export const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.icon} source={iconTest} />
      <View style={styles.textContainer}>
        <TextInput style={textType.INPUT_01} placeholder="Email address" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    height: 52,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.DARK_500,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 20,
  },
  textContainer: {
    marginLeft: 20,
    width: '100%',
  },
});
