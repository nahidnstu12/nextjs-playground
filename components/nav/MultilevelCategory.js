import { useState, useEffect, useRef } from "react";
import {
  Notifications,
  ChatBubble,
  ExpandMore,
  ArrowBack,
  ChevronRight,
  Menu,
} from "@material-ui/icons";
import styles from "./multilevel-category.module.scss";
import { CSSTransition } from "react-transition-group";
import { getAllCategory, getAllSubCategory } from "../../utils/data";
import { ClickAwayListener } from "@material-ui/core";

function MultilevelCategory() {
  return (
    <Navbar>
      <NavItem icon={<Notifications />} />
      <NavItem icon={<ChatBubble />} />
      <NavItem icon={<ExpandMore />} />

      <NavItem icon={<Menu />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <li className={styles.navItem}>
        <a
          href="#"
          className={styles.iconButton}
          onClick={() => setOpen(!open)}
        >
          {props.icon}
        </a>

        {open && props.children}
      </li>
    </ClickAwayListener>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const [category, setCategory] = useState(getAllCategory);

  const dropdownRef = useRef(null);

  // useEffect(()=>{
  //   setCategory(getAllCategory)
  // },[category])

  const item = category.filter((item) => item.category === activeMenu);
  const id2 = item[0]?.id;

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight + 30;
    setMenuHeight(height);
    // console.log(height)
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className={styles.menuItem}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className={props.leftIcon ? styles.iconButton : ""}>
          {props.leftIcon}
        </span>
        {props.children}
        <span className={styles.iconRight}>{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className={styles.dropdown}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <h3 className={styles.menuTitle}>Categories</h3>
          {category.map((item) => (
            <DropdownItem
              key={item.id}
              rightIcon={
                getAllSubCategory(item.id).length !== 0 && <ChevronRight />
              }
              goToMenu={
                getAllSubCategory(item.id).length !== 0 && item.category
              }
            >
              {item.category}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>

      <CSSTransition
        in={true}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          {activeMenu !== "main" && (
            <DropdownItem goToMenu="main" rightIcon={<ArrowBack />}>
              <span className={styles.menuTitle2}>{activeMenu}</span>
            </DropdownItem>
          )}
          {getAllSubCategory(id2).map((item) => (
            <DropdownItem key={item.id}>{item.subcategory}</DropdownItem>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default MultilevelCategory;
