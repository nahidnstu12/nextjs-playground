import styles from "./admin.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

export default function categoric({ categoric, categoricLabel }) {
   const router = useRouter()
   if (router.isFallback) {
     return <div>Loading...</div>;
   }
  return (
    <>
      <h3 className={styles.heading}>{categoricLabel}</h3>
      <div className={styles.products}>
        {categoric?.map((data, i) => (
          <div className={styles.product} key={i}>
            <div className={styles.productLeft}>
              <img src={data.image} alt="p1" />
            </div>
            <div className={styles.productRight}>
              <p>{`${data.title.substring(0, 10)}`}</p>
              <span>{data.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  // console.log(context)
  const { data } = await axios(
    `https://fakestoreapi.com/products/category/${context.params.category}`
  );
  return {
    props: { categoric: data, categoricLabel: context.params.category },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  const { data } = await axios(`https://fakestoreapi.com/products/categories`);
  const paths = data.map((product) => ({
    params: { category: product },
  }));
  console.log({data,paths})
  return {
    // paths: [{ params: { category: "jewelery" } }],
    paths,
    fallback: true,
  };
}
