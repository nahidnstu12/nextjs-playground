import { Favorite, Visibility } from "@material-ui/icons";
import { RatingOnly } from "../common/Ratings";
import { SingleIcon } from "../common/SingleComponent";
import styles from "../../styles/product/neat-product.module.scss";
import { ScaleButton } from "../common/Button";
import { subTitle } from "../../utils/helpers";

export default function NeatProduct({ data }) {
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

      <img src={data.image} alt="dish-food" />
      {/* <img src="img/products/dish-1.png" alt="dish-food" /> */}
      <h3>{subTitle(data.title, 30)}</h3>
      <RatingOnly value={parseInt(data.rating.rate)} />
      <span className={styles.price}>${data.price}</span>
      <ScaleButton text="add to cart" />
    </div>
  );
}
