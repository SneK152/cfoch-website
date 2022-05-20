import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
}

export default function Button(props: ButtonProps) {
  return props.href ? (
    <Link href={props.href}>
      <a
        className={`${
          props.className || ""
        } font-display pt-2 text-center pb-1 px-6 rounded-full shadow-md`}
        target={props.target}
      >
        {props.children}
      </a>
    </Link>
  ) : (
    <button
      className={`${
        props.className || ""
      } font-display pt-2 pb-1 text-center px-6 rounded-full shadow-md`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
