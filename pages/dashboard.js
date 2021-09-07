import Product from "../components/products/LongProduct";
import NeatProduct from "../components/products/NeatProduct";
import styles from "../styles/product/neat-product.module.scss";
import SectionHeader from "../components/common/SectionHeader";

export default function Dashboard() {
  return (
    <div className={styles.Container}>
      <SectionHeader
        isWhite={true}
        text="Our"
        colorText="Popular Dishes"
        description="We’re some creative people with powerful knowledge & awesome skills behind the scene bringing you the bests"
      />
      <div className={styles.boxContainer}>
        {[...Array(4)].map((_, id) => (
          <NeatProduct key={id} />
        ))}
      </div>
    </div>
  );
}
