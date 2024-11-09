//import "@azure/core-asynciterator-polyfill";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/index";
import { Amplify, Analytics } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
import AuthContextProvider from "./src/Contexts/AuthContext";
import BasketContextProvider from "./src/Contexts/BasketContext";
import OrderContexProvider from "./src/Contexts/OrderContext";
// import HomeScreen from "./src/screens/HomeScreen";
// import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import DishDetailScreen from "./src/screens/DishDetailScreen";
// import Basket from "./src/screens/Basket";

Amplify.configure(config);
Analytics.disable();

//const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <OrderContexProvider>
            <RootNavigator />
          </OrderContexProvider>
        </BasketContextProvider>
      </AuthContextProvider>
      <StatusBar style="light" />
    </NavigationContainer>

    // <NavigationContainer>
    //   <AuthContextProvider>
    //     <BasketContextProvider>
    //       <OrderContexProvider>
    //         <Stack.Navigator initialRouteName="HomeScreen">
    //           <Stack.Screen name="Home" component={HomeScreen} />
    //           <Stack.Screen
    //             name="Restaurant"
    //             component={RestaurantDetailsScreen}
    //           />
    //           <Stack.Screen name="Dish" component={DishDetailScreen} />
    //           <Stack.Screen name="Basket" component={Basket} />
    //         </Stack.Navigator>
    //       </OrderContexProvider>
    //     </BasketContextProvider>
    //   </AuthContextProvider>
    // </NavigationContainer>
  );
}

export default withAuthenticator(App);
//export default App;
