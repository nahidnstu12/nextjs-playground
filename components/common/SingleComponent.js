import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export const SingleIcon = ({ url, className, children, scrolling }) => {
  return (
    <Link href={url || "#"} to={scrolling}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export const RenderNavLinks = ({
  label,
  scrollTo,
  className,
  handleActive,
  activeClass,
}) => {
  // const [active, seActive] = useState("");
  // const handleActive = (e) => {
  //   console.log(e.target.value);
  //   setActive("active")
  // };
  return (
    <ScrollLink
      key={label}
      className={className}
      to={scrollTo}
      activeClass={activeClass}
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      delay={300}
      onClick={handleActive}
    >
      {label}
    </ScrollLink>
  );
};
