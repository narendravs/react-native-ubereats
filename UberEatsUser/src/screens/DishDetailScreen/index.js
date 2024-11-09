import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import retaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dish } from "../../models";
import { DataStore } from "aws-amplify";
import { useBasketContext } from "../../Contexts/BasketContext";

const dish = retaurants[0].dishes[0];
const DishDetailScreen = ({}) => {
  //const [dish, setDish] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { addDishToBasket } = useBasketContext();

  const route = useRoute();
  const id = route.params?.id;

  const navigation = useNavigation();

  // useEffect(() => {
  //   if (id) {
  //     DataStore.query(Dish, id).then(setDish);
  //   }
  // }, [id]);

  // if (!dish) {
  //   return <ActivityIndicator size={"large"} color="grey" />;
  // }

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  const onAddToBasket = () => {
    addDishToBasket(dish, quantity);
    navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircle"
          size={60}
          color="black"
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity} </Text>
        <AntDesign name="pluscircle" size={60} color="black" onPress={onPlus} />
      </View>
      <Pressable onPress={onAddToBasket} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} items to basket &#8226; {getTotal()} $
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "grey",
    fontSize: 16,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    alignItems: "center",
    marginTop: "auto",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default DishDetailScreen;
