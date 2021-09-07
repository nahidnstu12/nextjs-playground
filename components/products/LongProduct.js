import styles from "../../styles/product/longproduct.module.scss";
import { DefaultRating } from "../common/Ratings";
import { FavoriteBorder, Visibility, ShoppingCart } from "@material-ui/icons";
import { longProduct as data } from "../../utils/data";
import { SingleIcon } from "../common/SingleComponent";
import { NormalButton } from "../common/Button";

export default function LongProductCard() {
  return (
    <div className={styles.slideProduct}>
      <RenderIcon />

      <div className={styles.image}>
        <img src={data.imgUrl} alt="products-1" />
      </div>

      <div className={styles.content}>
        <DefaultRating value={parseInt(data.reviewCount)} totalViews={data.totalViews} />

        <h3>{data.productName}</h3>

        <div className={styles.price}>
          ${data.price} <span>${data.oldPrice}</span>
        </div>

        <NormalButton text="add to cart"/>
      </div>
    </div>
  );
}

const RenderIcon = () => {
  return (
    <div className={styles.icons}>
      <SingleIcon url={"/wishlists"}>
        <FavoriteBorder className={styles.iconsize} />
      </SingleIcon>
      <SingleIcon url={"/cartlists"}>
        <ShoppingCart className={styles.iconsize} />
      </SingleIcon>
      <SingleIcon url={"/detail"}>
        <Visibility className={styles.iconsize} />
      </SingleIcon>
    </div>
  );
};
