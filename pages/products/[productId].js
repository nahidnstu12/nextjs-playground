import { useRouter } from "next/router";
import FlickBannar from "../../components/bannar/FlickBannar";
import styles from "../../styles/product/flick-product.module.scss";

export default function SingleProduct({ data }) {
  const router = useRouter();
  // console.log("single product  " + router.isFallback);

  if (router.isFallback) {
    <div className="linking">Loading...</div>;
  }
  return (
    <div className={styles.boxContainer}>
      <FlickBannar data={data} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data = await res.json();
  console.log(`generating id ${params.productId}`);
 
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data = await res.json();
  const paths = data.map((d) => ({
    params: { productId: d.id.toString() },
  }));
  // console.log(paths)
  return {
    // paths: [{ params: { productId: "1" } }],
    paths,
    fallback: false,
  };
}
