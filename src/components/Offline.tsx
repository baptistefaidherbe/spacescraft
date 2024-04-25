import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useIsConnected } from 'react-native-offline';

export const Offline = () => {
  const isConnected = useIsConnected();

  return (
    <View>
      <Text>{!isConnected && <ActivityIndicator />}</Text>
    </View>
  );
};
