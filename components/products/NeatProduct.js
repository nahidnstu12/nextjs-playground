import { Favorite, Visibility } from "@material-ui/icons";
import { RatingOnly } from "../common/Ratings";
import { SingleIcon } from "../common/SingleComponent";
import styles from "../../styles/product/neat-product.module.scss";
import { ScaleButton } from "../common/Button";

export default function NeatProduct() {
  return (
    <div className={styles.box}>
      <div className={styles.iconsContainer}>
        <SingleIcon>
          <div className={styles.icons}>
            <Visibility className={styles.heartIcon} />
          </div>
        </SingleIcon>
        <SingleIcon>
          <div className={styles.icons}>
            <Favorite className={styles.eyeIcon} size="large" />
          </div>
        </SingleIcon>
      </div>

      <img src="img/products/dish-1.png" alt="dish-food" />
      <h3>tasty food</h3>
      <RatingOnly value={4} />
      <span className={styles.price}>$15.99</span>
      <ScaleButton text="add to cart" />
    </div>
  );
}
