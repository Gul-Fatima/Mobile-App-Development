import { StyleSheet, Text, View } from 'react-native';

type MovieItemProps = {
  name: string;
  year: number;
};

export default function MovieItem({ name, year }: MovieItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.year}>{year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#cde0ec',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  year: {
    fontSize: 16,
    marginTop: 5,
  },
});