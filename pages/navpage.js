import ContainerSpace from "../components/dummy/ContainerSpace";
// import FullNavbar from "../components/nav/FullNavbar";
import MultilevelCategory from "../components/nav/MultilevelCategory";
// import MultilevelDropdown from "../components/nav/MultiLevelDropdown";
// import Navbar from "../components/nav/Navbar";
import { navlinks } from "../utils/data";

export default function NavPage() {
  
  return (
    <div>
      {/* <Navbar /> */}
      {/* <FullNavbar /> */}
      <MultilevelCategory />
      {navlinks.map((nav) => (
        <ContainerSpace url={nav.path} key={nav.path}>
          {nav.label}
        </ContainerSpace>
      ))}
    </div>
  );
}
