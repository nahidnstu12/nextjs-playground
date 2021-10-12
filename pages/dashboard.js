// import Product from "../components/products/LongProduct";
import NeatProduct from "../components/products/NeatProduct";
import styles from "../styles/product/neat-product.module.scss";
import stylesFlick from "../styles/product/flick-product.module.scss";
import SectionHeader,{PolygonHeader} from "../components/common/SectionHeader";
import { LinearProgressLine } from "../components/common/Progress";
import {FlickProduct, FlickProductPop} from '../components/products/FlickProduct'
import FullNavbar from '../components/nav/FullNavbar'
import Link from 'next/link'
import { Button } from "@material-ui/core";
import Register from "../components/auth/Register";
import SliderAuth from "../components/auth/SliderAuth";

export default function Dashboard() {
  return (
    <div className={styles.Container}>
      <SliderAuth />
      
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
