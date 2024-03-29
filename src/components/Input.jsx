import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import colors from '../theme/ColorPalette';

export const Input = ({
  setState,
  state,
  type,
  icon,
  placeholder,
  isCorrect = true,
}) => {
  return (
    <View
      style={isCorrect ? styles.inputContainer : styles.dangerInputContainer}
    >
      <Image style={styles.icon} source={icon} />
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setState({ ...state, [type]: text })}
          placeholder={placeholder}
        />
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
  dangerInputContainer: {
    alignItems: 'center',
    width: '100%',
    height: 52,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.STATUS_DANGER,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    flex: 1,
  },
  textInput: {
    width: '100%',
    flex: 1,
  },
});
