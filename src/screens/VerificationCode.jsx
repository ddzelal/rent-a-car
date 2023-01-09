import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import Typography from '../components/Typography';
import colors from '../theme/ColorPalette';
import typeText from '../theme/TypographyTypes';
import Button from '../components/Button';
import { fetchForgotPassword } from '../../api';
import { useNavigation } from '@react-navigation/native';
const VerificationCode = ({ route }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTransparent: true, title: '' });
  }, []);

  const { email } = route?.params || 'notFound';

  const [code] = useState(new Array(7));

  const resendCode = async () => {
    await fetchForgotPassword(email);
  };
  const handleVerify = () => {
    code[3] = '-';
    const codeString = code.join('');
    navigation.navigate('ResetPassword', { code: codeString, email: email });
  };

  return (
    <View style={styled.mainContainer}>
      <View style={{ marginTop: 100 }}>
        <Typography
          color={colors.DARK_100}
          typeText={typeText.H3}
          textAlign="left"
        >
          Verification code?
        </Typography>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Typography
          typeText={typeText.P3}
          color={colors.DARK_200}
          textAlign="left"
        >
          Enter CODE send to {email.email || ''}
        </Typography>
      </View>
      <View style={styled.codeCardContainer}>
        <View style={styled.codeCard}>
          <TextInput
            maxLength={1}
            onChangeText={(text) => {
              code[0] = text;
            }}
            style={styled.codeInput}
          />
        </View>
        <View style={styled.codeCard}>
          <TextInput
            maxLength={1}
            onChangeText={(text) => {
              code[1] = text;
            }}
            style={styled.codeInput}
          />
        </View>
        <View style={styled.codeCard}>
          <TextInput
            maxLength={1}
            onChangeText={(text) => {
              code[2] = text;
            }}
            style={styled.codeInput}
          />
        </View>
        <View style={styled.codeCard}>
          <TextInput
            maxLength={1}
            onChangeText={(text) => {
              code[4] = text;
            }}
            style={styled.codeInput}
          />
        </View>
        <View style={styled.codeCard}>
          <TextInput
            maxLength={1}
            onChangeText={(text) => {
              code[5] = text;
            }}
            style={styled.codeInput}
          />
        </View>
        <View style={styled.codeCard}>
          <TextInput
            maxLength={1}
            onChangeText={(text) => {
              code[6] = text;
            }}
            style={styled.codeInput}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleVerify}>
        <Button title="Verify" />
      </TouchableOpacity>
      <View style={styled.resendCodeContainer}>
        <Typography color={colors.DARK_200} typeText={typeText.H5}>
          Didn’t received the code?
        </Typography>
        <TouchableOpacity onPress={resendCode}>
          <Text style={{ color: colors.PRIMARY_ORANGE, typeText }}>
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  codeCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeCard: {
    width: '15%',
    height: 50,

    backgroundColor: colors.DARK_600,
  },
  codeInput: {
    height: '100%',
    width: '100%',
    color: colors.DARK_200,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default VerificationCode;
