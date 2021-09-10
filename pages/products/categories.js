import stylesFlick from "../../styles/product/flick-product.module.scss";
import { FlickProductPop } from "../../components/products/FlickProduct";
import { SingleIcon } from "../../components/common/SingleComponent";
// import { useRouter } from "next/router";
export default function category({ data }) {
  // const router = useRouter();
  // console.log("categories  "+router.isFallback);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={stylesFlick.boxContainer}>
      {data.map((d, id) => (
        <SingleIcon
          url={`/products/category/${d}`}
          className={stylesFlick.speciality}
          key={id}
        >
          <FlickProductPop data={d} />
        </SingleIcon>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);
  const data = await res.json();
  // console.log(data);
  return {
    props: { data },
  };
}
