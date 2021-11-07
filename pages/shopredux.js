import { useState } from "react";
import Shop, { Navigation } from "../components/shop/shopredux/Shop";

export default function shopredux() {
  const [form, setForm] = useState("product");
  return (
    <>
      {/* nab */}
      <Navigation form={form} setForm={setForm} />
      <Shop form={form} setForm={setForm} />
    </>
  );
}
