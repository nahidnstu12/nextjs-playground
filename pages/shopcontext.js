import { useState } from "react";
import GlobalState from "../components/shop/shopcontext/GlobalState";
import Shop, { Navigation } from "../components/shop/shopcontext/Shop";
import { ShopContext } from "../components/shop/shopcontext/shopcontext";

export default function shopcontext() {
  const [form, setForm] = useState("product");
  const addtoproduct = (product) => console.log(product);
  const test = "test";
  return (
    <GlobalState>
      {/* nab */}
      <Navigation form={form} setForm={setForm} />
      <Shop form={form} setForm={setForm} />
    </GlobalState>
  );
}
