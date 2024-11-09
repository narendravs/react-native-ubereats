import { createContext, useEffect, useState, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const [restaurant, setRestaurant] = useState(null);
  const [basket, setBasket] = useState(null);
  const [basketDishes, setBasketDishes] = useState([]);

  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.and((b) => [b.userID.eq(dbUser?.id), b.restaurantID.eq(restaurant?.id)])
    ).then((baskets) => setBasket(baskets[0]));

    console.log("restaurant in context......");
    console.log(restaurant);
  }, [dbUser, restaurant]);

  useEffect(() => {
    DataStore.query(BasketDish, (bd) => bd.basketID.eq(basket.id)).then(
      setBasketDishes
    );
    console.log("..setBasketDishes....");
    console.log(setBasketDishes);
  }, [basket]);

  // const totalPrice = basketDishes.reduce(
  //   (sum, basketDish) => sum + basketDish.quantity * basketDish.Dish.price,
  //   restaurant?.deliveryFee
  // );

  const totalPrice = basketDishes.reduce(
    (sum, basketDish) => sum + basketDish.quantity * 20,
    restaurant?.deliveryFee
  );

  const addDishToBasket = async (dish, quantity) => {
    console.log("add dish to basket details", dish, quantity);
    let theBasket = basket || (await createNewBasket());
    const newDish = await DataStore.save(
      new BasketDish({ quantity, Dish: dish, basketID: theBasket.id })
    );

    setBasketDishes([...basketDishes, newDish]);
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantID: restaurant.id })
    );
    setBasket(newBasket);
    console.log("newBasket......");
    console.log(newBasket);
    return newBasket;
  };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        setRestaurant,
        basket,
        basketDishes,
        restaurant,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
export const useBasketContext = () => useContext(BasketContext);
