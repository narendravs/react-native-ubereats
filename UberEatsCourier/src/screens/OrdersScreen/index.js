import { useMemo, useRef, useState, useEffect } from "react";
import { View, Text, useWindowDimensions, Button,FlatList } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import order from "../../../assets/data/orders.json";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Order } from "../../models";
import { DataStore, API, graphqlOperation } from "aws-amplify";
import OrderItem from "../../components/OrderItem";
import * as queries from "../../graphql/queries";



const orders = order[0];
const OrdersScreen = () => {

 

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const { height, width } = useWindowDimensions();
 // const [orders, setOrders] = useState([]);
  

  const [driverLocation, setDriverLocation] = useState(null);

  const fetchOrder = async () => {

    const ord = DataStore.query(Order, "87018a7d-e38b-4bd6-9aea-f31b30b8085d");
   
      const orders1 = await API.graphql({
      query: queries.getOrder,
      variables: { id: "87018a7d-e38b-4bd6-9aea-f31b30b8085d" },
    });

    const orders2 = orders1.data.getOrder;
    console.log(orders2);
  };
  useEffect(() => {
   
    fetchOrder();
    
  }, []);

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView
        index={1}
        enableOverDrag={true}
        style={{ height, width }}
        showsUserLocation
        toolbarEnabled
        mapType="standard"
        loadingEnabled
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
     
     <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "grey" }}>
            Available Orders: {orders.User.name}
          </Text>
        </View>
        {/* <BottomSheetFlatList
          data={orders}
          renderItem={({item }) => <OrderItem order={item} />}
        />     */}
        
     <View>
        <OrderItem order={orders} />
     </View>
      </BottomSheet>
    </View>
  );
};

export default OrdersScreen;
