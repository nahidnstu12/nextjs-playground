import ContainerSpace from "../components/dummy/ContainerSpace";
import Navbar from "../components/nav/Navbar";
import { navlinks } from "../utils/data";

export default function NavPage() {
  return (
    <>
      <Navbar />
      {navlinks.map((nav) => (
        <ContainerSpace url={nav.path} key={nav.path}>
          {nav.label}
        </ContainerSpace>
      ))}
    </>
  );
}
