import styles from "./full-nav.module.scss";
import { getAllShoppingProduct, navlinks } from "../../utils/data";
import { RenderNavLinks } from "../common/SingleComponent";
import {
  Favorite,
  ShoppingCart,
  Person,
  Menu,
  Close,
  Search,
  Delete,
} from "@material-ui/icons";
import { SingleIcon } from "../common/SingleComponent";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
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
  const [isOpen, setOpen] = useState(false);
  const [isOpenCart, setOpenCart] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
    setOpenCart(false)
  };
  const handleCart = () => {
    setOpenCart(!isOpenCart)
    setOpen(false)
  }
  return (
    <>
      <div className={styles.navIcons}>
        <SingleIcon url={"#"} className={styles.span}>
          <Search
            style={{ fontSize: "1.5rem" }}
            className={`${styles.fas}`}
            onClick={handleClick}
          />
        </SingleIcon>
        <SingleIcon url={"#"} className={styles.span}>
          <Person style={{ fontSize: "1.5rem" }} className={styles.fas} />
        </SingleIcon>
        <SingleIcon url={"#"} className={styles.span}>
          <Favorite style={{ fontSize: "1.5rem" }} className={styles.fas} />
        </SingleIcon>
        <SingleIcon url={"#"} className={styles.span}>
          <ShoppingCart
            style={{ fontSize: "1.5rem" }}
            className={styles.fas}
            onClick={handleCart }
          />
        </SingleIcon>
      </div>
      <SearchInput isOpen={isOpen} />
      <ShortShoppingCart isOpenCart={isOpenCart} />
    </>
  );
};

const SearchInput = ({ isOpen }) => {
  return (
    <form
      action=""
      className={`${styles.searchForm} ${isOpen ? styles.active : ""}`}
    >
      <input type="search" id="search-box" placeholder="search here..." />
      <label htmlFor="search-box" className={`${styles.fa} fa-search`}>
        <Search />
      </label>
    </form>
  );
};

const ShortShoppingCart = ({ isOpenCart }) => {
  const [cart, setCart] = useState(getAllShoppingProduct);
  return (
    <>
      <div
        className={`${styles.shoppingCart} ${isOpenCart ? styles.active : ""}`}
      >
        {cart.map((item) => (
          <div className={styles.box} key={item.id}>
            <Delete className={styles.faTrash} />
            <img src={item.imgUrl} alt={item.productName} />
            <div className={styles.content}>
              <h3>{item.productName}</h3>
              <span className={styles.price}>${item.price}/-</span>
              <span className={styles.quantity}>qty : {item.quantity}</span>
            </div>
          </div>
        ))}

        <div className={styles.total}> total : $19.69/- </div>
        <a href="#" className={styles.btn}>
          checkout
        </a>
      </div>
    </>
  );
};
