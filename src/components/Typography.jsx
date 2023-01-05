import { Text } from 'react-native';
import React from 'react';

const Typography = ({ typeText, color, children }) => (
  <Text style={{ ...typeText, color: color, textAlign: 'center' }}>
    {children}
  </Text>
);

export default Typography;
