import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../theme/ColorPalette';

export const InputPassword = ({
  setState,
  state,
  type,
  icon,
  placeholder,
  iconEnd,
  isCorrect,
}) => {
  const [visibility, setVisibility] = useState(true);

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
          secureTextEntry={visibility}
        />
      </View>
      <TouchableOpacity onPress={() => setVisibility(!visibility)}>
        <Image style={styles.iconEnd} source={iconEnd} />
      </TouchableOpacity>
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
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    flex: 1,
  },
  iconEnd: {
    marginRight: 20,
  },
  textInput: {
    flex: 1,
  },
});
