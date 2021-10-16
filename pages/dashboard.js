// import Product from "../components/products/LongProduct";
import NeatProduct from "../components/products/NeatProduct";
import styles from "../styles/product/neat-product.module.scss";
import stylesFlick from "../styles/product/flick-product.module.scss";
import SectionHeader, {
  PolygonHeader,
} from "../components/common/SectionHeader";
import { LinearProgressLine } from "../components/common/Progress";
import {
  FlickProduct,
  FlickProductPop,
} from "../components/products/FlickProduct";
import FullNavbar from "../components/nav/FullNavbar";
import Link from "next/link";
import { Button } from "@material-ui/core";
import Register from "../components/auth/Register";
import SliderAuth from "../components/auth/SliderAuth";
import { useSession, signout } from "next-auth/client";
import { providers, getSession } from "next-auth/client";
import { useEffect } from "react";
import Router from "next/router";


export default function Dashboard() {

  // console.log({ providers, session });
  // useEffect(() => {
  //   if (session) return Router.push("/navpage");
  // }, [session]);
  // if (session) return null;
  
  // const [session] = useSession();
  //   console.log(session?.user.email);
  return (
    <div className={styles.Container}>
      {/* <p>
        logged in <strong>{session?.user.email || ""}</strong>
      </p>
      {session ? (
        <button onClick={() => signout()}>Logout</button>
      ) : (
        <Link href="/auth/login"><a>signIn</a></Link>
      )} */}
      <button >Logout</button>
      {/* <SliderAuth providers={providers} /> */}
    </div>
  );
}
// Dashboard.getInitialProps = async (context) => {
//   return {
//     providers: await providers(context),
//     session: await getSession(context),
//   };
// };
// export async function getStaticProps() {
//   const res = await fetch(`https://fakestoreapi.com/products`);
//   const data = await res.json();
//   // console.log(data);
//   return {
//     props: { data },
//   };
// }
