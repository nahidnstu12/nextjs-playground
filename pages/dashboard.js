import FullNavbar from "../components/nav/FullNavbar";
import {
  FlickProduct,
  FlickProductPop,
} from "../components/products/FlickProduct";

export default function Dashboard() {
  
  return (
    <div>
      {/* <FullNavbar /> */}
      <div className="mt-10 p-10 flex flex-wrap flex-auto gap-3">
        {[...Array(12)].map((_,item) => <FlickProduct key={item}/>)}
      </div>
     
    </div>
  );
}
