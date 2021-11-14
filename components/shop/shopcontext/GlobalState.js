import GlobalStateContext from "./GlobalStateContext";
import GlobalStateReducer from "./GlobalStateReducer";
import { ShopContext } from "./shopcontext";


const GlobalState = ({ children }) => {
  const { carts, products, addtoproduct, removetoproduct } = GlobalStateReducer();
  // const { carts, products, addtoproduct, removetoproduct } = GlobalStateContext();

  // console.log({ carts, products, addtoproduct, removetoproduct });

  return (
    <ShopContext.Provider
      value={{ carts, addtoproduct, removetoproduct, products }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
