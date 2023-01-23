import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Typography from './Typography';
import typeText from '../theme/TypographyTypes';
import { useNavigation } from '@react-navigation/native';
const Card = ({ title, backgroundColor, iconPath, componentPath = 'Home' }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(`${componentPath}`)}>
      <View style={styled.mainContainer}>
        <View
          style={{
            ...styled.circleContainer,
            backgroundColor: backgroundColor,
          }}
        >
          <Image source={iconPath} />
        </View>
        <Typography typeText={typeText.H6}>{title}</Typography>
      </View>
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    width: 106,
    height: 106,
    backgroundColor: '#FFFFFF',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    width: 52,
    height: 52,
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
