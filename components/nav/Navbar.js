import { RenderNavLinks, SingleIcon } from "../common/SingleComponent";
import styles from "../../styles/nav/nav.module.scss";
import { navlinks } from "../../utils/data";
// import { useState, useEffect } from "react";

export default function Navbar() {
  // const [active, seActive] = useState("");
//   const handleActive = (e) => {
//     console.log(e.target.value);
//     seActive("active");
//   };
//   useEffect(() => {
//     handleActive();
//   }, [active]);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>OneShop.</div>
      <nav className={styles.nav}>
        {navlinks.map((nav) => (
          <RenderNavLinks
            key={nav.label}
            label={nav.label}
            scrollTo={nav.path}
            className={styles.navlinks}
            // activeClass={"active"}
            // onClick={(e) => handleActive(e)}
          />
        ))}

        <div className={`${styles.animation} ${styles.startHome}`}></div>
      </nav>
    </div>
  );
}
