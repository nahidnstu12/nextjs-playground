import Home from "../components/swr/Home";

export default function SWR() {
    return (
        <div className="">
            <Home />
        </div>
    )
}
// export async function getServerSideProps() {
//   console.log(`server/posts`);
//   let serverPosts = [];
//   try {
//     const { data } = await axios.get(
//       `/posts?_sort=createdAt&_order=desc&_page=0&_limit=6`
//     );

//     serverPosts = data;
    
//   } catch (err) {
//     serverPosts = [];
//     console.log(err);
//   }
// //   console.log(server);
//   return {
//     props: { serverPosts }, // will be passed to the page component as props
//   };
// }
