import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonRequest } from "../../store/pokemon/actions";
import { getErrorSelector, getPendingSelector, getPokemonsSelector } from "../../store/pokemon/selector";
import styles from "../../utils/styles";

const PokemonList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const pokemons = useSelector(getPokemonsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchPokemonRequest());
  }, []);

  return (
    pending
      ? <Text>Loading...</Text>
      : error
        ? <Text>{error}</Text>
        : <>
          <ScrollView>
            <View style={styles.container}>
              {
                pokemons
                  .filter(pokemon =>
                    pokemon.name.toLowerCase()
                  )
                  .map((pokemon, index) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        key={index}
                        style={styles.card}
                        onPress={() =>
                          navigation.navigate('Pokemon Detail', {
                            pokemon: pokemon.name,
                          })
                        }>
                        <Image
                          style={{ width: 150, height: 150 }}
                          source={{
                            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                          }}
                        />
                        <Text>{pokemon.name}</Text>
                      </TouchableOpacity>
                    );
                  })
              }
            </View >
          </ScrollView >
        </>
  );
};

export default PokemonList;
