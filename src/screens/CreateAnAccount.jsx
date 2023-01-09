import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import Typography from '../components/Typography';
import typeText from '../theme/TypographyTypes';
import colors from '../theme/ColorPalette';
import Button from '../components/Button';
import { InputPassword } from '../components/InputPassword';
import pass from '../../assets/icons/lock.png';
import eyeInv from '../../assets/icons/eyeInvisible.png';
import { useNavigation } from '@react-navigation/native';
import userIcon from '../../assets/icons/userIcon.png';
import sms from '../../assets/icons/sms.png';
import phone from '../../assets/icons/call.png';
import { Input } from '../components/Input';
import { createAnAccountAPI } from '../../api';

const CreateAnAccount = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTransparent: true, title: '' });
  }, []);

  const [isCorrect, setIsCorrect] = useState(true);
  const [user, setUser] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
  });

  const handleSignUp = async () => {
    if (
      user.email.length &&
      user.name.length &&
      user.username.length &&
      user.password.length > 3
    ) {
      await createAnAccountAPI(user);
      navigation.navigate('VerifyAccount');
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <View style={styled.mainContainer}>
      <View style={{ marginTop: 100 }}>
        <Typography
          color={colors.DARK_100}
          typeText={typeText.H3}
          textAlign="left"
        >
          Create an account
        </Typography>
      </View>

      <View style={{ marginTop: 30 }}>
        <Input
          icon={userIcon}
          placeholder="First name"
          setState={setUser}
          state={user}
          type="name"
          isCorrect={isCorrect}
        />
        <Input
          icon={userIcon}
          placeholder="Last name"
          setState={setUser}
          state={user}
          type="username"
          isCorrect={isCorrect}
        />
        <Input
          icon={sms}
          placeholder="Email address"
          setState={setUser}
          state={user}
          type="email"
          isCorrect={isCorrect}
        />
        <Input
          icon={phone}
          placeholder="Phone number"
          setState={setUser}
          state={user}
          type="phoneNumber"
        />
        <InputPassword
          icon={pass}
          iconEnd={eyeInv}
          setState={setUser}
          state={user}
          type="password"
          placeholder="Password"
          isCorrect={isCorrect}
        />
      </View>
      <TouchableOpacity onPress={handleSignUp}>
        <Button title="Update new password" />
      </TouchableOpacity>
    </View>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default CreateAnAccount;
