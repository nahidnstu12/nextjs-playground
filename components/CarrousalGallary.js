import { CarousalItem } from "./common/Carousal";
import LongProductCard from "./products/LongProduct";
import styles from "../styles/product/longproduct.module.scss";
import { responsiveDense } from "../utils/carousel.breakpoint";

export default function CarrousalGallary() {
  return (
    <div className={styles.products}>
      <CarousalItem responsive={responsiveDense}>
        {[...Array(14)].map((_, id) => (
          <LongProductCard key={id} />
        ))}
      </CarousalItem>
    </div>
  );
}
