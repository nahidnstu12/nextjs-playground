import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const SingleIcon = ({ url, className, children }) => {
  return (
    <Link href={url || "#"} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};
export const SingleLink = ({ url, className, label }) => {
  return (
    <Link href={url || "#"} passHref>
      <a className={className}>{label}</a>
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
