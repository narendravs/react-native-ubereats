import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
//import retaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext } from "../../Contexts/BasketContext";
import { useOrderContext } from "../../Contexts/OrderContext";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

//const retaurant = retaurants[0];

const DishDetailScreen = () => {
  const { restaurant, basketDishes, totalPrice } = useBasketContext();
  const { createOrder } = useOrderContext();
  const navigation = useNavigation();

  const onCreateOrder = async () => {
    await createOrder();
    navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant?.name}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 19, marginTop: 20 }}>
        Your items
      </Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => (
          <BasketDishItem basketItem={item} keyExtractor={(item) => item.id} />
        )}
      />
      <View style={styles.separator} />

      <Pressable onPress={onCreateOrder} style={styles.button}>
        <Text style={styles.buttonText}>
          Create order $ {totalPrice.toFixed(1)}
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
    marginVertical: 15,
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
  quantityContainer: {
    backgroundColor: "grey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
    borderRadius: 3,
  },
});

export default DishDetailScreen;
