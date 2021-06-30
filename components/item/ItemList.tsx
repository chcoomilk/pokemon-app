import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../utils/styles";
import useFetch from "../../utils/useFetch";

const ItemList = () => {
  const navigation = useNavigation();
  const { data, status } = useFetch("https://pokeapi.co/api/v2/item");

  return (
    <>
      {status == "success"
        ? <ScrollView>
          <View style={styles.container}>
            {
              data.results
                .filter((item: any) =>
                  item.name.toLowerCase()
                )
                .map((item: any, index: number) => {
                  return (
                    <View key={index} style={{ marginVertical: 5 }}>
                      <Button
                        title={item.name}
                        onPress={() => navigation.navigate("Item Detail", {
                          item: item.name
                        })}
                      />
                    </View>
                  );
                })
            }
          </View >
        </ScrollView >
        : <Text>
          Loading...
        </Text>
      }

    </>
  );
};

export default ItemList;
