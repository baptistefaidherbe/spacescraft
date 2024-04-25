import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginScreen from './src/screens/LoginScreen';
import StarshipFeedScreen from './src/screens/StarshipFeedScreen';
import { NetworkProvider } from 'react-native-offline';
import { ScreenContainer } from '~/layout/ScreenContainer';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NetworkProvider>
          <ScreenContainer>
            <LoginScreen />
            <StarshipFeedScreen />
          </ScreenContainer>
        </NetworkProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

// export { default } from './.storybook';
