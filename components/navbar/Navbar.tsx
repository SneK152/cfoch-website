import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import navLinks from "@lib/data/navLinks";
import Link from "next/link";
import { Fragment } from "react";
import DropdownButton from "./DropdownButton";
import DropdownLink from "./DropdownLink";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <Popover as="nav" className="bg-lightgreen relative">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-darkgreen focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkgreen">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <Link href="/">
                  <a className="font-bold font-display text-xl">CFOCH</a>
                </Link>
                <div className="hidden sm:block">
                  <ul className="flex gap-4 items-center h-full">
                    {navLinks.map((item) =>
                      !item.dropdown ? (
                        <NavLink key={item.href} href={item.href}>
                          {item.name}
                        </NavLink>
                      ) : (
                        <DropdownLink
                          key={item.href}
                          title={item.name}
                          navLink={item}
                        >
                          {item.dropdown.map((d) => (
                            <DropdownButton key={d.href} href={d.href}>
                              {d.name}
                            </DropdownButton>
                          ))}
                        </DropdownLink>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Popover.Panel className="sm:hidden absolute bg-lightgreen w-full">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((item) => (
                <Popover.Button key={item.name} as={Fragment}>
                  <NavLink href={item.href} className="block">
                    {item.name}
                  </NavLink>
                </Popover.Button>
              ))}
            </ul>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
