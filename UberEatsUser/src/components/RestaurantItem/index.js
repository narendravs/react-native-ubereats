//import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import restaurants from "../../../assets/data/restaurants.json";
import RestaurantDetailsPage from "../../screens/RestaurantDetailsScreen";

const RestaurantItem = ({ restaurant }) => {
  // const restaurant = restaurants[0];
  const DEFAULT_IMAGE =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
    //<RestaurantDetailsPage data={restaurant.id} />;
    //Alert.alert(restaurant.id);
  };

  return (
    <Pressable style={styles.restaurantContainer} onPress={onPress}>
      <Image
        source={{
          uri: restaurant.image == "null" ? DEFAULT_IMAGE : restaurant.image,
        }}
        style={styles.image}
      />

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee.toFixed(1)} &#8226;
            {restaurant.minDeliveryTime} -{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{restaurant.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 4,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: "grey",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
