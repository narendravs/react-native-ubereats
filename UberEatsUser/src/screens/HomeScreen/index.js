//import "@azure/core-asynciterator-polyfill";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
//import restaurants from "../../../assets/data/restaurants.json";

import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestuants = async () => {
    const restaurant = await DataStore.query(Restaurant);
    setRestaurants(restaurant);
    console.log("restuant details", restaurant);
  };

  // query(Post, Predicates.ALL, {
  //   page: 0,
  //   limit: 100
  // });

  useEffect(() => {
    fetchRestuants();
  }, []);

  return (
    <View>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
