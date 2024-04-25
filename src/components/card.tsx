import { Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { starShip } from '~/type';
import { useImage } from '~/hook/useImage';

export default function CardComponent({ item }: { item: starShip }) {
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
