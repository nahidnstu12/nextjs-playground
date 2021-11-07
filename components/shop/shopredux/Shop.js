// import Link from "next/link";
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
          label={"Cart"}
          scrollTo={"#"}
          className={`w-24 text-center p-2 text-white font-bold ${style2}`}
          url={`#`}
          onClick={() => setForm("cart")}
        />
      </div>
    </div>
  );
};

const Items = ({ item, btnText }) => {
  return (
    <div className="flex bg-gray-600 text-white justify-between px-8 items-center gap-4 w-1/2 h-12">
      <div className="flex gap-4">
        <div>{item.title}</div>
        <div>-{item.price} take</div>
      </div>
      <button className={"bg-red-400 font-medium p-1 px-2 rounded text-sm"}>{btnText}</button>
    </div>
  );
};
const Product = () => {
  return (
    <div className="flex items-center mt-8 flex-col gap-4">
      {shopProducts.map((item) => (
        <Items key={item.id} item={item} btnText="ADD TO CART"/>
      ))}
    </div>
  );
};
const Cart = () => {
 return (
   <div className="flex items-center mt-8 flex-col gap-4">
     {shopProducts.map((item) => (
       <Items key={item.id} item={item} btnText="REMOVE TO CART" />
     ))}
   </div>
 );
};
