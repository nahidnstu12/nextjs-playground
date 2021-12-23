import styles from "../admin.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserCarts({ userCart, username }) {
  //   console.log({ username });
  const [cartObj, setCart] = useState([]);
  useEffect(async () => {
    // rubelSir

    const productId = userCart[0]?.products?.map(
      (productId) => productId.productId
    );
    productId?.map((id) =>
      axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
        const {quantity} =  userCart[0]?.products?.find(id2 => id2.productId === id)
        // console.log(quantity);
        const cartProduct = {...res.data,quantity}
        setCart((prev) => [...prev, cartProduct]);

      })
    );
    // console.log(data);
  }, []);

  console.log(cartObj);
  return (
    <>
      <h3 className={styles.heading}>{username}'s cart</h3>
      <div className={styles.products}>
        {cartObj.map((data, i) => (
          <div className={styles.product} key={i}>
            <div className={styles.productLeft}>
              <img src={data.image} alt="p1" />
            </div>
            <div className={styles.productRight}>
              <p>{`${data.title.substring(0, 10)}`}</p>
              <span>{data.price}</span>
              <p>Qt: {data.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      {cartObj.length === 0 && (
        <div className={styles.info}>
          No cart product available. Go to shopping
        </div>
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await axios(
    `https://fakestoreapi.com/carts/user/${params.userCart}`
  );
  const {
    data: { username },
  } = await axios(`https://fakestoreapi.com/users/${params.userCart}`);
  //   console.log(username)
  return {
    props: { userCart: data, username },
  };
}
