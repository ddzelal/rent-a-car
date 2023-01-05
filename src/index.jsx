import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();
  const isLoadingComplete = useCachedResources();

  return (
    <>
      {isLoadingComplete ? (
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      ) : null}
    </>
  );
};

export default App;
