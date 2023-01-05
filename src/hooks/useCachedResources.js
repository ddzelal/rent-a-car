import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          GilmerLight: require('../../assets/fonts/GilmerLight.otf'),
          GilmerBold: require('../../assets/fonts/GilmerBold.otf'),
          GilmerHeavy: require('../../assets/fonts/GilmerHeavy.otf'),
          GilmerMedium: require('../../assets/fonts/GilmerMedium.otf'),
          GilmerOutline: require('../../assets/fonts/GilmerOutline.otf'),
          GilmerRegular: require('../../assets/fonts/GilmerRegular.otf'),
          ProductSans: require('../../assets/fonts/ProductSansRegular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
