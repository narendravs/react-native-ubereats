import { View, FlatList } from "react-native";
import OrderListItem from "../../components/OrderListItem";
//import orders from "../../../assets/data/orders.json";
import { useOrderContext } from "../../Contexts/OrderContext";

const OrdersScreen = () => {
  const { orders } = useOrderContext();
  console.log("orders......");
  console.log(orders);
  return (
    <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderListItem order={item} keyExtractor={item.id} />
        )}
      />
    </View>
  );
};

export default OrdersScreen;
