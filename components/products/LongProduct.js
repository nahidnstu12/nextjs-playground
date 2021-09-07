import styles from "../../styles/product/longproduct.module.scss";
import { DefaultRating } from "../common/Ratings";
import { Favorite, Visibility, ShoppingCart } from "@material-ui/icons";
import { longProduct as data } from "../../utils/data";
import { SingleIcon } from "../common/SingleComponent";
import { NormalButton } from "../common/Button";

export default function LongProductCard() {
  const sideIcon = true;
  return (
    <div className={styles.slideProduct}>
      <span className={styles.discount}>25%</span>
      {sideIcon && <RenderIcon />}

      <div className={styles.image}>
        <img src={data.imgUrl} alt="products-1" />
        {!sideIcon && <RenderBottomIcon />}
      </div>

      <div className={styles.content}>
        <DefaultRating
          value={parseInt(data.reviewCount)}
          totalViews={data.totalViews}
        />

        <h3>{data.productName}</h3>

        <div className={styles.price}>
          ${data.price} <span>${data.oldPrice}</span>
        </div>

        <NormalButton text="add to cart" />
      </div>
    </div>
  );
}

const RenderIcon = () => {
  return (
    <div className={styles.icons}>
      <SingleIcon url={"/wishlists"} className={styles.anc}>
        <Favorite className={styles.iconsize} />
      </SingleIcon>
      <SingleIcon url={"/cartlists"} className={styles.anc}>
        <ShoppingCart className={styles.iconsize} />
      </SingleIcon>
      <SingleIcon url={"/detail"} className={styles.anc}>
        <Visibility className={styles.iconsize} />
      </SingleIcon>
    </div>
  );
};
const RenderBottomIcon = () => {
  return (
    <div className={styles.bottomIcons}>
      <SingleIcon url={"/wishlists"} className={styles.iconsize}>
        <Favorite style={{ fontSize: "2.5rem" }} />
      </SingleIcon>
      <SingleIcon
        url={"/cartlists"}
        className={`${styles.cartBtn} ${styles.iconsize}`}
      >
        Add to cart
      </SingleIcon>
      <SingleIcon url={"/detail"} className={styles.iconsize}>
        <Visibility style={{ fontSize: "2.5rem" }} />
      </SingleIcon>
    </div>
  );
};
