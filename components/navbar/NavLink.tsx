import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function NavLink(props: NavLinkProps) {
  const router = useRouter();
  return (
    <li
      className={`${
        router.pathname === props.href ? "font-bold" : ""
      } text-base`}
    >
      <Link href={props.href}>
        <a className={`${props.className || ""}`}>{props.children}</a>
      </Link>
    </li>
  );
}
