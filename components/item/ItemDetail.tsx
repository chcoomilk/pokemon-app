import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import useFetch from '../../utils/useFetch';

interface ParamsData {
  item: string
}

const ItemDetail = () => {
  const route = useRoute</*ParamsData*/any>();
  const { data, status } = useFetch(`https://pokeapi.co/api/v2/item/${route.params.item}`);
  const [item, setItem] = useState<any>();

  useEffect(() => {
    if (status == "success") setItem(data);
  }, [status]);

  useEffect(() => {
    if (status == "success") {
      console.log(item.name)
      // let data = JSON.parse(JSON.stringify(item))
      // console.log(data.name);
    }
  }, [item]);

  if (item) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.text}>Attributes: {item.attributes[0].name}</Text>
        <Text style={styles.text}>Category: {item.category.name}</Text>
        <Text style={styles.text}>Cost: {item.cost}</Text>
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

export default ItemDetail;
