import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetails from "../screens/RestaurantDetailsScreen";
import DishDetailScreen from "../screens/DishDetailScreen";
import Basket from "../screens/Basket";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuthContext } from "../Contexts/AuthContext";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const stack = createNativeStackNavigator();
const RootNavigator = () => {
  const { dbUser } = useAuthContext();

  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      {dbUser ? (
        <stack.Screen name="HomeTabs" component={HomeTabs}></stack.Screen>
      ) : (
        <stack.Screen name="Profile" component={ProfileScreen} />
      )}
    </stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile "
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetails}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={DishDetailScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrderStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders List" component={OrdersScreen} />
      <OrderStack.Screen name="Order" component={OrderDetails} />
    </OrderStack.Navigator>
  );
};

export default RootNavigator;
