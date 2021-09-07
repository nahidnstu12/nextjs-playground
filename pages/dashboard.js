import Product from "../components/products/LongProduct";
import NeatProduct from "../components/products/NeatProduct";
import styles from "../styles/product/neat-product.module.scss";
import stylesFlick from "../styles/product/flick-product.module.scss";
import SectionHeader from "../components/common/SectionHeader";
import FlickProduct, { FlickProductPop } from "../components/products/FlickProduct";

export default function Dashboard() {
  return (
    <div className={styles.Container}>
      <SectionHeader
        isWhite={true}
        text="Our"
        colorText="Popular Dishes"
        description="We’re some creative people with powerful knowledge & awesome skills behind the scene bringing you the bests"
      />
      <div className={stylesFlick.boxContainer}>
        {[...Array(4)].map((_, id) => (
          <FlickProductPop key={id} />
        ))}
      </div>

      <div className={stylesFlick.boxContainer}>
        {[...Array(4)].map((_, id) => (
          <FlickProduct key={id} />
        ))}
      </div>
      <div className={styles.boxContainer}>
        {[...Array(4)].map((_, id) => (
          <NeatProduct key={id} />
        ))}
      </div>
      
    </div>
  );
}
