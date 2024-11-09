import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import { useOrderContext } from "../../Contexts/OrderContext";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

const order = orders[0];
const restaurant = restaurants[0];
const OrderDetailsHeader = ({ order }) => {
  return (
    <View>
      <View style={styles.page}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={styles.image}
        ></Image>
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
        </View>
        <Text style={styles.menuTitle}>Your order</Text>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  const route = useRoute();
  const id = route.params?.id;
  // const [order, setOrder] = useState();

  const { getOrder } = useOrderContext();

  // useEffect(() => {
  //   getOrder(id).then(setOrder);
  // }, []);

  // if (!order) {
  //   return <ActivityIndicator size={"large"} color={"grey"} />;
  // }
  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      //data={order.dishes}
      data={order.dishes}
      renderItem={({ item }) => (
        <BasketDishItem basketItem={item} key={item.key} />
      )}
    />
  );
};
export default OrderDetails;
