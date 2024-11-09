import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  const DEFAULT_IMAGE =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("Dish", { name: dish.name, id: dish.id });
       
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>{dish.price}</Text>
      </View>

      {dish.image && (
        <Image
          source={{ uri: dish.image != "null" ? dish.image : DEFAULT_IMAGE }}
          style={styles.image}
        />
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    color: "grey",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 100,
    aspectRatio: 1,
  },
});
export default DishListItem;
