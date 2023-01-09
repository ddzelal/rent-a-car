import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import rightArrow from '../../assets/icons/rightArrow.png';

const Button = (props) => {
  const { title, ...restProps } = props;
  return (
    <View style={styles.buttonContainer} {...restProps}>
      <Text style={styles.textButton}>{title}</Text>
      <Image source={rightArrow} />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
    height: 46,
    backgroundColor: '#CF952C',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  textButton: {
    marginHorizontal: 10,
    color: '#FFFFFF',
    fontFamily: 'GilmerBold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});
