import { Text, View, Image } from "react-native";
import styles from "./styles";

const RestaurantHeader = ({ restaurant }) => {
  const DEFAULT_IMAGE =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image != "null" ? restaurant.image : DEFAULT_IMAGE,
        }}
        style={styles.image}
      ></Image>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} &#8226;
          {restaurant.minDeliveryTime} -{restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
      <Text style={styles.menuTitle}>Menu</Text>
    </View>
  );
};
export default RestaurantHeader;
