import Link from "next/link";

export const SingleIcon = ({ url, className, children }) => {
  return (
    <Link href={url || "#"}>
      <a className={className}>{children}</a>
    </Link>
  );
};
