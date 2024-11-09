import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList,Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
//import orders from "./assets/data/orders.json";
// import OrderItem from "./src/components/OrderItem";
import OrderDelivery from "./src/screens/OrderDelivery/index.js";
import { Amplify, Analytics } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
// import AuthContext from "./src/context/AuthContext";
// import OrderContext from "./src/context/OrderContext";


import OrdersScreen from "./src/screens/OrdersScreen";

// Amplify.configure(config);
// Analytics.disable();

function App() {
  return (
    // <NavigationContainer>
    //   <GestureHandlerRootView style={{ flex: 1 }}>
    //     <AuthContext>
    //       <OrderContext>
    //         <Navigation />
    //       </OrderContext>
    //     </AuthContext>
    //   </GestureHandlerRootView>
    //   <StatusBar style="auto" />
    // </NavigationContainer>
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </NavigationContainer>
    // <View>
    //   <Text style={{textAlign:'center'}}>Hello test app is not working</Text>
    // </View>
  );
}

//export default withAuthenticator(App);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 50,
  },
});
