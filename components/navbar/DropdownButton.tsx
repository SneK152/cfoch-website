import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef, ReactNode } from "react";

const MyLink = forwardRef(function L({ href, children, ...rest }: any, ref) {
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default function DropdownButton({
  href,
  children,
  target,
}: {
  href: string;
  children: ReactNode;
  target?: string;
}) {
  const router = useRouter();
  return (
    <Menu.Item>
      {() => (
        <MyLink
          className={`${
            router.pathname === href
              ? "bg-cyan-400 font-semibold"
              : "hover:bg-cyan-300"
          } block px-4 py-2 text-base text-black z-50`}
          target={target || "_self"}
          href={href}
        >
          {children}
        </MyLink>
      )}
    </Menu.Item>
  );
}
