// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransportationModes = {
  "DRIVING": "DRIVING",
  "BICYCLING": "BICYCLING"
};

const OrderStaus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Courier, BasketDish, Basket, Order, OrderDish, Restaurant, User, Dish } = initSchema(schema);

export {
  Courier,
  BasketDish,
  Basket,
  Order,
  OrderDish,
  Restaurant,
  User,
  Dish,
  TransportationModes,
  OrderStaus
};