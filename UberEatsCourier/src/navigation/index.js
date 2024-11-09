import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../screens/OrdersScreen";
import OrdersDeliveryScreen from "../screens/OrderDelivery";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuthContext } from "../context/AuthContext";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { dbCourier, loading } = useAuthContext();

  // if (loading) {
  //   return <ActivityIndicator size="large" color="gray" />;
  // }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {dbCourier ? (
        <>
          <Stack.Screen
            name="OrdersDeliveryScreen"
            component={OrdersDeliveryScreen}
          />
        </>
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )} */}
      <Stack.Screen
            name="OrdersDeliveryScreen"
            component={OrdersDeliveryScreen}
          />
    </Stack.Navigator>
  );
};

export default Navigation;
