import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Typography from '../components/Typography';
import colors from '../theme/ColorPalette';
import typeText from '../theme/TypographyTypes';
import Logo from '../../assets/images/logoSvg.svg';
import menu from '../../assets/icons/menu.png';
import Card from '../components/Card';
import { dataHome } from '../common/homeOptions';
import { getData, removeValue } from '../utils/asyncStorageService';
import { useQuery } from 'react-query';
import SplashScreen from './SplashScreen';
import { getCurrentUser } from '../../api';

const Home = () => {
  const navigation = useNavigation();

  const { data, isLoading, isSuccess } = useQuery('getData', async () =>
    getData('TOKEN'),
  );

  // const getUser = useQuery('getUser', async () => getCurrentUser(), {
  // enabled: data?.isSuccess,
  // });

  // console.log(getUser?.data, 'geTUser');

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
    getCurrentUser()
      .then((res) => {
        console.log(res, 'ppppppppppppppppppppp');
      })
      .catch((error) => console.log(error, 'EROR12345675678'));
  }, []);

  const handleLogout = async () => {
    try {
      await removeValue('TOKEN');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  const cardOptions = dataHome?.map((card, i) => {
    return (
      <View key={i}>
        <Card
          title={card?.title}
          backgroundColor={card?.backgroundColor}
          iconPath={card?.iconPath}
          componentPath={card.componentPath}
        />
      </View>
    );
  });

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <View style={styled.mainContainer}>
          <View style={styled.headerContainer}>
            <View style={styled.headerTitle}>
              <TouchableOpacity onPress={handleLogout}>
                <Logo width={27} height={36} />
              </TouchableOpacity>
              <Typography color={colors.DARK_100} typeText={typeText.H4}>
                Home
              </Typography>
              <Image source={menu} />
            </View>
            <View style={styled.headerText}>
              <Typography
                textAlign="left"
                color={colors.DARK_100}
                typeText={typeText.H2}
              >
                Transportation Management Portal
              </Typography>
            </View>
          </View>
          <View style={styled.cardContainer}>{cardOptions}</View>
        </View>
      )}
    </>
  );
};

const styled = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    height: '30%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    justifyContent: 'space-around',
  },
  headerTitle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    height: 70,
    width: '80%',
    marginLeft: 20,
  },
  cardContainer: {
    flex: 1,
    marginVertical: 20,
    flexDirection: 'row',
    margin: 10,
    borderColor: 'red',

    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Home;
