import React from "react";
import Link from "next/link";
import styles from "../admin.module.scss";
import axios from "axios";
const data = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};
export default function adminproducts({ products }) {
  console.log(products);
  return (
    <>
      <h3 className={styles.heading}>All Products</h3>
      <div className={styles.products}>
        {products.map((data, i) => (
          <div className={styles.product} key={i}>
            <div className={styles.productLeft}>
              <img src={data.image} alt="p1" />
              <Link href={`/admin/${data.category}`}>
                <p>{data.category}</p>
              </Link>
            </div>
            <div className={styles.productRight}>
              <p>{`${data.title.substring(0, 10)}`}</p>
              <span>{data.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios("https://fakestoreapi.com/products");
  return {
    props: { products:data },
  };
}
