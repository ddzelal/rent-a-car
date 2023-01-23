import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import userImage from '../../assets/images/userImage.png';
import Typography from '../components/Typography';
import { useQuery } from 'react-query';
import { getCurrentUser } from '../../api';
import typeText from '../theme/TypographyTypes';
import colors from '../theme/ColorPalette';

const Profile = () => {
  const navigation = useNavigation();

  const { data, isLoading } = useQuery('getUser', async () => getCurrentUser());

  console.log(data, 'data u profile');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      title: 'Profile',
      headerTitleAlign: 'center',
    });
  }, []);

  return (
    <>
      {isLoading ? null : (
        <View style={styled.mainContainer}>
          <View style={styled.logoContainer}>
            <View>
              <Image source={userImage} />
            </View>
            <Typography typeText={typeText.H4}>{data?.name}</Typography>
            <Typography typeText={typeText.P3}>Serbia</Typography>
          </View>
          <View style={styled.infoContainer}>
            <View style={styled.infoCard}>
              <Typography color={colors.SECONDARY_GREEN} typeText={typeText.H4}>
                03
              </Typography>
              <Typography color={colors.DARK_200} typeText={typeText.P4}>
                Registered
              </Typography>
            </View>
            <View style={styled.infoCard}>
              <Typography color={colors.SECONDARY_GREEN} typeText={typeText.H4}>
                01
              </Typography>
              <Typography color={colors.DARK_200} typeText={typeText.P4}>
                Expired
              </Typography>
            </View>
            <View style={styled.infoCardLast}>
              <Typography color={colors.SECONDARY_GREEN} typeText={typeText.H4}>
                02
              </Typography>
              <Typography color={colors.DARK_200} typeText={typeText.P4}>
                Renew
              </Typography>
            </View>
          </View>
          <View style={styled.finesCard}>
            <View style={{ margin: 10 }}>
              <Typography
                textAlign="left"
                typeText={typeText.H5}
                color={colors.DARK_100}
              >
                Fines per vehicle
              </Typography>
            </View>
            <View style={styled.finesCardContainer}>
              <View style={styled.finesCardText}>
                <Typography
                  textAlign="left"
                  color={colors.DARK_200}
                  typeText={typeText.P4}
                >
                  BMW M4
                </Typography>
                <Typography
                  textAlign="left"
                  color={colors.DARK_200}
                  typeText={typeText.P4}
                >
                  BMW X7
                </Typography>
              </View>
              <View style={styled.finesCardText}>
                <Typography color={colors.DARK_100} typeText={typeText.H6}>
                  : R172.00
                </Typography>
                <Typography color={colors.DARK_100} typeText={typeText.H6}>
                  : R172.00
                </Typography>
              </View>
            </View>
          </View>
          <View style={styled.drivingContainer}>
            <View>
              <View style={{ marginLeft: 10 }}>
                <Typography
                  textAlign="left"
                  typeText={typeText.H5}
                  color={colors.DARK_100}
                >
                  Driving points
                </Typography>
              </View>
              <View style={styled.finesCardContainer}>
                <View style={styled.finesCardText}></View>
                <View style={styled.finesCardText}></View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  infoContainer: {
    height: 70,
    width: '90%',
    backgroundColor: colors.SECONDARY_GREEN_LIGHT,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoCard: {
    width: '33%',
    height: '70%',
    borderRightWidth: 2,
    borderRightColor: colors.SECONDARY_GREEN,
  },
  infoCardLast: {
    width: '33%',
    height: '70%',
  },
  finesCard: {
    width: '90%',
    height: 125,
    marginTop: 40,
    backgroundColor: '#FFFFFF',
  },
  finesCardText: {
    width: '40%',
    height: '50%',
    justifyContent: 'space-between',
  },
  finesCardContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  drivingContainer: {
    marginTop: 20,
    width: '90%',
    height: 100,
    backgroundColor: '#FFFFFF',
  },
});

export default Profile;
