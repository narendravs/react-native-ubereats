import { View, Text, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";

const BasketDishItem = ({ basketItem }) => {
  // const restaurants = restaurants[0];

  console.log("basketItem......");
  console.log(basketItem);
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketItem.quantity}</Text>
      </View>
      {/* <Text style={{ fontWeight: "600" }}>{basketItem.Dish.name}</Text> */}
      <Text style={{ fontWeight: "600" }}>{restaurants[0].dishes[0].name}</Text>
      {/* <Text style={{ marginLeft: "auto", padding: 10 }}>
        ${basketItem.Dish.price}
      </Text> */}
      <Text style={{ marginLeft: "auto", padding: 10 }}>
        ${restaurants[0].dishes[0].price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    padding: 5,
  },

  quantityContainer: {
    backgroundColor: "grey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
    borderRadius: 3,
  },
});

export default BasketDishItem;
