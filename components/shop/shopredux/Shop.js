// import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addtoproduct,
  removetoproduct,
} from "../../../redux/actions/shopActions";
import { shopProducts } from "../../../utils/data";
import { SingleLink } from "../../common/SingleComponent";

export default function Shop({ form, setForm }) {
  switch (form) {
    case "product":
      return <Product setForm={setForm} />;
    case "cart":
      return <Cart setForm={setForm} />;
    default:
      return;
  }
}

export const Navigation = ({ form, setForm }) => {
  const style = form === "product" ? "bg-red-600 rounded" : "";
  const style2 = form === "cart" ? "bg-red-600 rounded" : "";
  const shopCartCount = useSelector((state) =>
    state.shopCart.reduce((count, cur) => count + cur.quantity, 0)
  );
  const totalPrice = useSelector((state) =>
    state.shopCart.reduce(
      (count, cur) => count + Number(cur.price) * cur.quantity,
      0
    )
  );
  // console.log(shopCartCount);
  return (
    <div className="flex justify-center">
      <div className="bg-red-400 flex justify-center items-center h-14 w-1/2 gap-8">
        <SingleLink
          label={"Product"}
          scrollTo={"#"}
          className={`w-24 text-center p-2 text-white font-bold ${style}`}
          url={`#`}
          onClick={() => setForm("product")}
        />
        <SingleLink
          label={`Cart (${shopCartCount})`}
          scrollTo={"#"}
          className={`w-24 text-center p-2 text-white font-bold ${style2}`}
          url={`#`}
          onClick={() => setForm("cart")}
        />
        <div className="text-white">Total: {totalPrice} tk</div>
      </div>
    </div>
  );
};

const Items = ({ item, btnText, onClick }) => {
  return (
    <div className="flex bg-gray-600 text-white justify-between px-8 items-center gap-4 w-1/2 h-12">
      <div className="flex gap-4">
        <div>
          {item.title} {item.quantity && <span>({item.quantity})</span>}
        </div>
        <div> ${item.price} taka</div>
      </div>
      <button
        className={"bg-red-400 font-medium p-1 px-2 rounded text-sm"}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};
const Product = () => {
  const dispatch = useDispatch();
  const updateCart = (item) => {
    dispatch(addtoproduct(item));
  };
  return (
    <div className="flex items-center mt-8 flex-col gap-4">
      {shopProducts.map((item) => (
        <Items
          key={item.id}
          item={item}
          btnText="ADD TO CART"
          onClick={() => updateCart(item)}
        />
      ))}
    </div>
  );
};
const Cart = () => {
  const dispatch = useDispatch();
  const { shopCart } = useSelector((state) => state);
  const updateCart = (id) => {
    dispatch(removetoproduct(id));
    // console.log(item);
  };
  return (
    <div className="flex items-center mt-8 flex-col gap-4">
      {shopCart.map((item) => (
        <Items
          key={item.id}
          item={item}
          btnText="REMOVE TO CART"
          onClick={() => updateCart(item.id)}
        />
      ))}
    </div>
  );
};
