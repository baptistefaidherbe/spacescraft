import { Card, Text } from 'react-native-paper';
import React from 'react';
import { useImage } from '~/hook/useImage';
import { starShip } from '~/type';
import { Image } from 'react-native';

export default function StarshipDetailsScreen({
  route,
}: {
  route: {
    params: { item: starShip };
  };
}) {
  const { item } = route.params;
  const source = useImage(item.name);

  return (
    <Card>
      <Image
        style={{
          height: 200,
          width: '100%',
        }}
        source={source}
      />
      <Text>{item.name}</Text>
      <Text style={{ fontSize: 9 }}>{item.manufacturer}</Text>
      <Text style={{ fontSize: 9 }}>{item.crew}</Text>
      <Text style={{ fontSize: 9 }}>{item.hyperdrive_rating}</Text> 
    </Card>
  );
}
