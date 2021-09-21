import NeatProduct from "../../../components/products/NeatProduct";
import styles from "../../../styles/product/neat-product.module.scss";
import { useRouter } from "next/router";
import { SingleIcon } from "../../../components/common/SingleComponent";
import { LinearProgressLine } from "../../../components/common/Progress";

export default function CategoricProducts({ data }) {
  const router = useRouter();
  // console.log("category  " + router.isFallback);

  if (router.isFallback) {
    // <div className="linking">Loading...</div>;
    <LinearProgressLine />;
  }

  return (
    <>
      <SingleIcon url="/products/categories" className="linking">
        Baack
      </SingleIcon>
      <div className={styles.boxContainer}>
        {data &&
          data.map((d, id) => (
            <SingleIcon
              url={`/products/${d.id}`}
              //   className={styles.box}
              key={id}
            >
              <NeatProduct data={d} />
            </SingleIcon>
          ))}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.categoriesId}`
  );
  const data = await res.json();
  console.log(`generating id ${params.categoriesId}`);
    if (!data) {
      return {
        //     redirect: {
        //       destination: "/",
        //       permanent: false,
        //     },
        notFound: true,
      };
    }

  return {
    props: { data },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data = await res.json();
  // const paths = data.map((d) => ({
  //   params: { categoriesId: d.category },
  // }));
  //   console.log(paths)
  return {
    paths: [{ params: { categoriesId: "jewelery" } }],
    // paths,
    fallback: true,
  };
}
