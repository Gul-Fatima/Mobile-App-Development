import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import MovieItem from '../components/MovieItem';

type Movie = {
  id: string;
  name: string;
  year: number;
};

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([
    {id: '1', name: 'The Wandering Earth', year: 2019 },
    { id: '2', name: 'The Wandering Earth 2', year: 2023 },
    { id: '3', name: 'Leap', year: 2020 },
    { id: '4', name: 'The Captain', year: 2019 },
  ]);

const [movieName, setMovieName] = useState('');
const [movieYear, setMovieYear] = useState('');

const addMovie = () => {
  if (movieName.trim() === '' || movieYear.trim() === '') {
    return;
  }

  const newMovie: Movie = {
    id: Math.random().toString(),
    name: movieName,
    year: Number(movieYear),
  };

  setMovies((currentMovies) => [...currentMovies, newMovie]);

  setMovieName('');
  setMovieYear('');
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>My Favourite Movies</Text>

    <TextInput
      style={styles.input}
      placeholder="Enter movie name"
      value={movieName}
      onChangeText={setMovieName}
    />

    <TextInput
      style={styles.input}
      placeholder="Enter movie year"
      value={movieYear}
      onChangeText={setMovieYear}
      keyboardType="numeric"
    />
    
    <Button title="Add Movie" onPress={addMovie} />

    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MovieItem
          name={item.name}
          year={item.year}
        />
      )}
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});