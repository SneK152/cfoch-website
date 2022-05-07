import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return props.href ? (
    <Link href={props.href}>
      <a
        className={`${
          props.className || ""
        } font-display pt-2 pb-1 px-6 rounded-full`}
      >
        {props.children}
      </a>
    </Link>
  ) : (
    <button
      className={`${
        props.className || ""
      } font-display pt-2 pb-1 px-6 rounded-full`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
