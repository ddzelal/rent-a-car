import { Text } from 'react-native';
import React from 'react';

const Typography = ({ typeText, color, children, textAlign = 'center' }) => (
  <Text style={{ ...typeText, color: color, textAlign: `${textAlign}` }}>
    {children}
  </Text>
);

export default Typography;
