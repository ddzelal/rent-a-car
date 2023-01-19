import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';

const App = () => {
  const queryClient = new QueryClient();
  const isLoadingComplete = useCachedResources();

  return (
    <>
      {isLoadingComplete ? (
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <Navigation />
              <StatusBar translucent backgroundColor="transparent" />
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </QueryClientProvider>
      ) : null}
    </>
  );
};

export default App;
