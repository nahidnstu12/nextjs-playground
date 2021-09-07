import styles from "../../styles/product/flick-product.module.scss";
import { FluidButton } from "../common/Button";
export default function FlickProduct() {
  return (
    <div className={styles.box}>
      <img src="img/products/g-1.jpg" alt="product-1" />
      <div className={styles.content}>
        <h3>tasty food</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
          ipsum.
        </p>
        <FluidButton text="Order Now" />
      </div>
    </div>
  );
}

export const FlickProductPop = () => {
  return (
    <div className={styles.speciality}>
      <img className={styles.image} src="img/products/s-img-4.jpg" alt="" />
      <div className={styles.content}>
        <img src="img/products/s-4.png" alt="" />
        <h3>tasty burger</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          inventore neque amet ipsa tenetur voluptates aperiam tempore libero
          labore aut.
        </p>
      </div>
    </div>
  );
};
