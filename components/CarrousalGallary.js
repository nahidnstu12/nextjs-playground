import { CarousalItemDense } from "./common/Carousal";
import LongProductCard from "./products/LongProduct";
import styles from "../styles/product/longproduct.module.scss";
export default function CarrousalGallary({ localTest }) {
  return (
    <div className={styles.products}>
      <CarousalItemDense localTest="localTest">
        
        {[...Array(14)].map((_, id) => (
          <LongProductCard key={id} />
        ))}
      </CarousalItemDense>
    </div>
  );
}
