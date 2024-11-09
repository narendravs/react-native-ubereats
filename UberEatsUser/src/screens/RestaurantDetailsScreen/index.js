import { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";
import resturants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { DataStore } from "aws-amplify";
import { Dish, Restaurant, Order } from "../../models";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useBasketContext } from "../../Contexts/BasketContext";
import { useAuthContext } from "../../Contexts/AuthContext";

const RestaurantDetailsPage = (props) => {
  const [restaurant, setRestaurant] = useState([]);
  const [dishes, setDishes] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  const fetchDishes = async () => {
    await DataStore.query(Dish, (d) => d.restaurantID.eq(id)).then(setDishes);
    console.log("dbUser.....");
    console.log(dbUser);
  };

  const {
    setRestaurant: setBasketRestaurant,
    basket,
    basketDishes,
  } = useBasketContext();

  const dbUser = useAuthContext();

  useEffect(() => {
    if (!id) {
      return;
    }
    setBasketRestaurant(null);
    // fetch the restaurant with the id
    DataStore.query(Restaurant, id).then(setRestaurant);

    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
      setDishes
    );
  }, [id]);

  useEffect(() => {
    setBasketRestaurant(restaurant);
  }, [restaurant]);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={resturants[0]} />}
        data={resturants[0].dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
      {basket && (
        <Pressable
          onPress={() => navigation.navigate("Basket")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Open basket ({basketDishes.length})
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RestaurantDetailsPage;
