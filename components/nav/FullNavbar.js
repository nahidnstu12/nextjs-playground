import styles from "../../styles/nav/full-nav.module.scss";
import { navlinks } from "../../utils/data";
import { RenderNavLinks } from "../common/SingleComponent";
import {
  Favorite,
  ShoppingCart,
  Person,
  Menu,
  Close,
} from "@material-ui/icons";
import { SingleIcon } from "../common/SingleComponent";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useToggle } from "../../hooks/useToggle";
import { useState } from "react";

export default function FullNavbar() {
  const [isOpen, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  const isShow = isOpen ? styles.show : "";
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <header id="home" className={`${styles.header} ${isShow}`}>
        <nav className={`${styles.navigation} ${styles.fixNav} ${isShow}`}>
          <div className={`${styles.navCenter} ${styles.container}`}>
            <a href="#home" className={styles.logo}>
              <h1>
                ONE<span>SHOP</span>.
              </h1>
            </a>

            <div className={`${styles.navMenu} ${isShow}`}>
              <div className={styles.navTop}>
                <div className={styles.logo}>
                  <h1>
                    ONE<span>SHOP</span>.
                  </h1>
                </div>

                <div className={styles.close}>
                  <SingleIcon>
                    <Close onClick={() => setOpen(false)} />
                  </SingleIcon>
                </div>
              </div>

              <ul className={styles.navList}>
                {navlinks.map((nav) => (
                  <li className={styles.navItem} key={nav.label}>
                    <RenderNavLinks
                      label={nav.label}
                      scrollTo={nav.path}
                      className={styles.navLink}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <RenderBottomIcon />
            <div className={styles.hamburger}>
              <SingleIcon>
                <Menu onClick={() => setOpen(true)} />
              </SingleIcon>
            </div>
          </div>
        </nav>
      </header>
    </ClickAwayListener>
  );
}

const RenderBottomIcon = () => {
  return (
    <div className={styles.navIcons}>
      <SingleIcon url={"#"} className={styles.span}>
        <Person style={{ fontSize: "1.5rem" }} className={styles.fas} />
      </SingleIcon>
      <SingleIcon url={"#"} className={styles.span}>
        <Favorite style={{ fontSize: "1.5rem" }} className={styles.fas} />
      </SingleIcon>
      <SingleIcon url={"#"} className={styles.span}>
        <ShoppingCart style={{ fontSize: "1.5rem" }} className={styles.fas} />
      </SingleIcon>
    </div>
  );
};
