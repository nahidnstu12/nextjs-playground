import { useState } from "react";
import GlobalState from "../components/shop/shopcontext/GlobalState";
import Shop, { Navigation } from "../components/shop/shopcontext/ShopNew";

export default function shopcontext() {
  const [form, setForm] = useState("product");

  return (
    <GlobalState>
      {/* nab */}
      <Navigation form={form} setForm={setForm} />
      <Shop form={form} setForm={setForm} />
    </GlobalState>
  );
}
