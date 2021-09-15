// import Product from "../components/products/LongProduct";
import NeatProduct from "../components/products/NeatProduct";
import styles from "../styles/product/neat-product.module.scss";
import stylesFlick from "../styles/product/flick-product.module.scss";
import SectionHeader from "../components/common/SectionHeader";
import { LinearProgressLine } from "../components/common/Progress";
import {FlickProduct} from '../components/products/FlickProduct'
import Link from 'next/link'
import { Button } from "@material-ui/core";

export default function Dashboard() {
  return (
    <div className={styles.Container}>
      <LinearProgressLine />
      <SectionHeader
        isWhite={true}
        text="Our"
        colorText="Popular Dishes"
        description="We’re some creative people with powerful knowledge & awesome skills behind the scene bringing you the bests"
      />
      {/* <div className={stylesFlick.boxContainer}>
        {[...Array(4)].map((_, id) => (
          <FlickProductPop key={id} />
        ))}
      </div> */}
      <Button color="primary" variant="contained">Test</Button>

      <div className={stylesFlick.boxContainer}>
        {[...Array(8)].map((_, id) => (
          <FlickProduct key={id} />
        ))}
      </div>
      {/* <div className={styles.boxContainer}>
        {data.map((d, id) => (
          <NeatProduct key={id} data={d} />
        ))}
      </div> */}
      <Link href="/products/categories">
      <a>
        <FlickProduct />
      </a>
      </Link>
      
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`https://fakestoreapi.com/products`);
//   const data = await res.json();
//   // console.log(data);
//   return {
//     props: { data }, 
//   };
// }
