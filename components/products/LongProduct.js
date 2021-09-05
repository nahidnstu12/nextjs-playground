import styles from "../../styles/product/longproduct.module.scss";
import { DefaultRating } from "../common/Ratings";
import { FavoriteBorder, Visibility, ShoppingCart } from "@material-ui/icons";
import Link from "next/link";
import { longProduct as data } from "../../utils/data";


export default function LongProductCard() {
  return (
    <div className={styles.slideProduct}>
      <RenderIcon />

      <div className={styles.image}>
        <img src={data.imgUrl} alt="products-1" />
      </div>

      <div className={styles.content}>

        <DefaultRating value={data.reviewCount} totalViews={data.totalViews} />

        <h3>{data.productName}</h3>

        <div className={styles.price}>
          ${data.price} <span>${data.oldPrice}</span>
        </div>

        <SingleIcon className={styles.btn}>add to cart</SingleIcon>
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

const SingleIcon = ({ url, className, children }) => {
  return (
    <Link href={url || "#"}>
      <a className={className}>{children}</a>
    </Link>
  );
};
