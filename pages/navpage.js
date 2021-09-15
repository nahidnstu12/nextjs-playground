import ContainerSpace from "../components/dummy/ContainerSpace";
import FullNavbar from "../components/nav/FullNavbar";
// import Navbar from "../components/nav/Navbar";
import { navlinks } from "../utils/data";

export default function NavPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <FullNavbar />
      {navlinks.map((nav) => (
        <ContainerSpace url={nav.path} key={nav.path}>
          {nav.label}
        </ContainerSpace>
      ))}
    </div>
  );
}
