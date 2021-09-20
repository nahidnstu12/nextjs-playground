import {
  Notifications,
  ChatBubble,
  ExpandMore,
  Add,
  ArrowBack,
  Extension,
} from "@material-ui/icons";
import styles from "../../styles/nav/multilevel-dropdown.module.scss";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function MultilevelDropdown() {
  return (
    <Navbar>
      <NavItem icon={<Notifications />} />
      <NavItem icon={<ChatBubble />} />
      <NavItem icon={<ExpandMore />} />

      <NavItem icon={<Add />}>
        <DropdownMenu></DropdownMenu>
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

  return (
    <li className={styles.navItem}>
      <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight+30);
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
        <span className={styles.iconButton}>{props.leftIcon}</span>
        {props.children}
        <span className={styles.iconRight}>{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className={styles.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<Extension />}
            rightIcon={<Extension />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ArrowBack />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowBack />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Extension />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Extension />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Extension />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Extension />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowBack />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default MultilevelDropdown;
