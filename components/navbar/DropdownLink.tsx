import TreeDown from "@components/icons/TreeDown";
import { Menu, Transition } from "@headlessui/react";
import NavLink from "@lib/types/NavLink";
import { useRouter } from "next/router";
import { Fragment, ReactNode } from "react";

interface DropdownLinkProps {
  children: ReactNode;
  title: string;
  navLink: NavLink;
  mobile?: boolean;
}

function Dropdown({ children, title, mobile, navLink }: DropdownLinkProps) {
  const router = useRouter();
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div className="flex h-full">
            <Menu.Button
              className={`w-full rounded-md flex gap-0.5 items-center ${
                router.pathname.includes(navLink.href)
                  ? "font-bold"
                  : "font-normal"
              } focus:outline-none z-0`}
            >
              {title}
              <TreeDown
                className={`w-4 h-4 inline-block transition-transform duration-200 ${
                  open ? "-scale-y-[1]" : ""
                }`}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={`origin-top-right absolute z-50 ${
                mobile ? "left-0" : "right-0"
              } mt-2 w-56 rounded-md shadow-lg bg-blue ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div className="py-1">{children}</div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default function DropdownLink({ children, ...rest }: DropdownLinkProps) {
  return (
    <div className="flex">
      <Dropdown {...rest}>{children}</Dropdown>
    </div>
  );
}
