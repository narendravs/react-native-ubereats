import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderDish, Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext({});

const OrderContexProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { dbUser } = useAuthContext();
  const { restaurant, totalPrice, basketDishes, basket } = useBasketContext();

  useEffect(() => {
    DataStore.query(Order, (o) => o.userID.eq(dbUser.id)).then(setOrders);
  }, [dbUser]);

  const getOrder = async (id) => {
    const order = await DataStore.query(Order, (o) => (o, id));
    const orderDishes = await DataStore.query(OrderDish, (od) =>
      od.orderID.eq(id)
    );
    console.log("orderDishes.....................");
    console.log(orderDishes);
    console.log(id);
    console.log(order);
    return { ...order, dishes: orderDishes };
  };

  const createOrder = async () => {
    const newOrder = await DataStore.save(
      new Order({
        status: "NEW",
        userID: dbUser.id,
        total: totalPrice,
        Restaurant: restaurant,
      })
    );

    await Promise.all(
      basketDishes.map((basketDish) =>
        DataStore.save(
          new OrderDish({
            quantity: basketDish.quantity,
            orderID: newOrder.id,
            Dish: basketDish.Dish,
          })
        )
      )
    );

    await DataStore.delete(basket);
    console.log("newOrder..............");
    console.log(newOrder);
    setOrders([...orders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContexProvider;
export const useOrderContext = () => useContext(OrderContext);
