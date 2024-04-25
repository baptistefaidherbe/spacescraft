import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  RefreshControl,
} from 'react-native';
import CardComponent from '~/components/card';
import { starShip } from '~/type';
// import { default as data } from '~/api/data.json';
import { UseStarships } from '~/hook/useStarships';
import { useState } from 'react';
import { ScreenContainer } from '~/layout/ScreenContainer';

const StarshipFeedScreen = () => {
  const { data, isLoading, isError, refetch } = UseStarships();
  const [refreshing, setRefreshing] = useState(false);

  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing to true to show the refresh indicator
    refetch().then(() => {
      setRefreshing(false); // Set refreshing to false after the data is refetched
    });
  };

  return (
    <ScreenContainer>
      <FlatList
        scrollEnabled={false}
        data={data.results as starShip[]}
        renderItem={({ item }: ListRenderItemInfo<starShip>) => (
          <CardComponent item={item} />
        )}
        keyExtractor={(item) => item.name}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </ScreenContainer>
  );
};

export default StarshipFeedScreen;
