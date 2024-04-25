import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>SPACECRAFT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7251E9',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
