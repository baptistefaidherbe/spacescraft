import { Card, Text } from 'react-native-paper';
import React from 'react';
import { useImage } from '~/hook/useImage';
import { starShip } from '~/type';
import { Image } from 'react-native';

export default function StarshipDetailsScreen({
  route,
}: {
  route: {
    params: starShip;
  };
}) {
  const { name, crew, hyperdrive_rating } = route.params;
  const source = useImage(name);

  return (
    <Card>
      <Image
        style={{
          height: 200,
          width: '100%',
        }}
        source={source}
      />
      <Text>{name}</Text>
      <Text style={{ fontSize: 9 }}>{name}</Text>
      <Text style={{ fontSize: 9 }}>{crew}</Text>
      <Text style={{ fontSize: 9 }}>{hyperdrive_rating}</Text>
    </Card>
  );
}
