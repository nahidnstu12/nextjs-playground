import Product from "../components/products/LongProduct";
import styles from "../styles/product/longproduct.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.products}>
      {[...Array(4)].map((_, id) => (
        <Product key={id} />
      ))}
    </div>
  );
}
