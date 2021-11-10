import { createContext } from "react";
const context = {
  cart: [],
  addtoproduct: (product) => {},
  removetoproduct: (productId) => {},
  test: "test"
};
export const ShopContext = createContext(context);

// {
//   cart: [],
//   addtoproduct: (product) => {},
//   removetoproduct: (productId) => {},
// }
