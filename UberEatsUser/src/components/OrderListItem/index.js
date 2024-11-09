import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import restaurants from "../../../assets/data/restaurants.json";
const OrderListItems = ({ order }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Order", { id: order.id });
  };

  return (
    <Pressable
      onPress={onPress}
      style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
    >
      <Image
        //source={{ uri: order.Restaurant.image }}
        source={{ uri: restaurants[0].image }}
        style={{ width: 75, height: 75, marginRight: 10 }}
      />
      <View>
        {/* <Text style={{ fontWeight: "700", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text> */}
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          {restaurants[0].name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226 $45.80</Text>
        <Text>2 days ago &#8226 {order.status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItems;
