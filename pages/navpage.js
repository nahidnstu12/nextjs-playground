// import { PolygonHeader } from "../components/common/SectionHeader";
import ContainerSpace from "../components/dummy/ContainerSpace";
import FullNavbar from "../components/nav/FullNavbar";
// import MultilevelCategory from "../components/nav/MultilevelCategory";
// import MultilevelDropdown from "../components/nav/MultiLevelDropdown";
// import Navbar from "../components/nav/Navbar";
import { navlinks } from "../utils/data";

export default function NavPage() {
  
  return (
    <div>
      {/* <Navbar /> */}
      <FullNavbar />
      {/* <MultilevelCategory /> */}
      {/* <div style={{ marginTop:"3rem"}}>
      <PolygonHeader text="Our" colorText="Popularity" description="Resolving deltas: 100% (25/25), completed with 14 local objects."/>
      </div> */}
      {navlinks.map((nav) => (
        <ContainerSpace url={nav.path} key={nav.path}>
          {nav.label}
        </ContainerSpace>
      ))}
    </div>
  );
}
