import React from 'react';
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../utils/styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Button
            title="Pokemon List"
            onPress={() => navigation.navigate("Pokemon List")}
          />
          <View style={{ marginVertical: 5 }} />
          <Button
            title="Item List"
            onPress={() => navigation.navigate("Item List")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
