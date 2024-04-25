import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NetworkProvider } from 'react-native-offline';
import Navigator from '~/navigation/Navigator';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NetworkProvider>
          <Navigator />
        </NetworkProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}