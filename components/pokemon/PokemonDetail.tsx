import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import useFetch from '../../utils/useFetch';

interface ParamsData {
  pokemon: string
}

const PokemonDetail = () => {
  const route = useRoute</*ParamsData*/any>();
  const { data, status } = useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`);
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    if (status == "success") setPokemon(data);
  }, [status]);

  useEffect(() => {
    if (status == "success") {
      console.log(pokemon.name)
      // let data = JSON.parse(JSON.stringify(pokemon))
      // console.log(data.name);
    }
  }, [pokemon]);

  if (pokemon) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
          }}
        />
        <Text style={styles.text}>Name: {pokemon.name}</Text>
        <Text style={styles.text}>Height: {pokemon.height}</Text>
        <Text style={styles.text}>Weight: {pokemon.weight}</Text>
        <Text style={styles.text}>
          Ability: {pokemon.abilities[0].ability.name}
        </Text>
        <Text style={styles.text}>Type: {pokemon.types[0].type.name}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#E63F34" />
      </View >
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PokemonDetail;
