import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import rightArrow from '../../assets/icons/rightArrowOrange.png';

const ButtonLight = (props) => {
  const { title, ...restProps } = props;
  return (
    <View style={styles.buttonContainer} {...restProps}>
      <Text style={styles.textButton}>{title}</Text>
      <Image source={rightArrow} />
    </View>
  );
};

export default ButtonLight;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
    height: 46,
    borderWidth: 2,
    borderColor: '#CF952C',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  textButton: {
    marginHorizontal: 10,
    color: '#CF952C',
    fontFamily: 'GilmerBold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});
