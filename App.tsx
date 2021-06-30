import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from './components/pokemon/PokemonList';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/main';
import PokemonDetail from './components/pokemon/PokemonDetail';
import ItemList from './components/item/ItemList';
import ItemDetail from './components/item/ItemDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pokemon List" component={PokemonList} />
          <Stack.Screen name="Pokemon Detail" component={PokemonDetail} />
          <Stack.Screen name="Item List" component={ItemList} />
          <Stack.Screen name="Item Detail" component={ItemDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
