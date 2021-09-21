import styles from "../../styles/product/flick-product.module.scss";
import { FluidButton } from "../common/Button";
import { data } from "../../utils/data";

export const FlickProduct = () => {
  return (
    <div className={styles.box}>
      <img src={data.image} alt="product-1" />
      <div className={styles.content}>
        <h3>{data.title}</h3>
        <p>
         {data.description}
        </p>
        <FluidButton text="Order Now" />
      </div>
    </div>
  );
};

export const FlickProductPop = ({ data }) => {
  return (
    <div className={`${styles.speciality} ${styles.border}`}>
      <img
        className={styles.image}
        src={`/img/products/${data} category.png`}
        alt=""
      />
      <div className={styles.content}>
        <img src={`/img/products/${data}.png`} alt="category" />
        <h3>{data}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          inventore neque amet ipsa tenetur voluptates aperiam tempore libero
          labore aut.
        </p>
      </div>
    </div>
  );
};
