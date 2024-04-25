import { Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { starShip } from '~/type';
import { useImage } from '~/hook/useImage';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '~/navigation/Route';
import { StackNavigationProp } from '@react-navigation/stack';

export default function CardComponent({ item }: { item: starShip }) {
  type RootStackParamList = {
    StarshipScreenDetail: { item: starShip };
  };

  type StarshipScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'StarshipScreenDetail'
  >;

  const source = useImage(item.name);
  const navigation = useNavigation<StarshipScreenNavigationProp>();

  return (
    <Card
      onPress={() => navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, { item })}
    >
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
