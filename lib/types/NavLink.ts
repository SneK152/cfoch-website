import { AnchorHTMLAttributes } from "react";

type NavLink = {
  name: string;
  href: string;
  dropdown?: NavLink[];
  customProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

export default NavLink;
