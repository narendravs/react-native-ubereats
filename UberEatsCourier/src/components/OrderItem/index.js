import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { User, Restaurant } from "../../models";
import { DataStore } from "aws-amplify";

const OrderItem = ({ order }) => {
  
  const [user, setUser] = useState();
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    DataStore.query(User, order.userID).then(setUser);
  }, []);
  
  return (
    <View style={styles.container}>
     <View style={styles.inContainer}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={{
            width: "25%",
            height: "100%",
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />
        <View style={styles.content}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {order.Restaurant.name}
          </Text>
          <Text style={{ color: "grey" }}>{order.Restaurant.address}</Text>
          <Text style={{ marginTop: 5, fontWeight: "500" }}>
            Delivery details:
          </Text>
          <Text style={{ color: "grey" }}>{user?.name}</Text>
          <Text style={{ color: "grey" }}>{user?.address}</Text>
        </View>
        <View style={styles.check}>
          <Entypo name="check" size={30} color="black"></Entypo>
        </View>
      </View> 
     
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {},
  inContainer: {
    flexDirection: "row",
    borderColor: "#3FC060",
    borderWidth: 2,
    borderRadius: 12,
    margin: 10,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 5,
  },
  check: {
    marginLeft: "auto",
    backgroundColor: "#3FC060",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
