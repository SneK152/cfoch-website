import TreeDown from "@components/icons/TreeDown";
import { Disclosure, Popover } from "@headlessui/react";
import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import navLinks from "@lib/data/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import DropdownButton from "./DropdownButton";
import DropdownLink from "./DropdownLink";
import NavLink from "./NavLink";

export default function Navbar() {
  const router = useRouter();
  return (
    <Popover as="nav" className="bg-lightgreen z-50 fixed w-full shadow-lg">
      {({ open }) => (
        <div className="padded-section">
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
                            <DropdownButton
                              key={d.href}
                              href={d.href}
                              {...d.customProps}
                            >
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
          <Popover.Panel className="sm:hidden absolute bg-lightgreen w-full z-50">
            {({ close }) => (
              <ul className="px-2 pt-2 pb-3 space-y-1">
                {/* {navLinks.map((item) => (
                <Popover.Button key={item.name} as={Fragment}>
                  <NavLink href={item.href} className="block">
                    {item.name}
                  </NavLink>
                </Popover.Button>
              ))} */}
                {navLinks.map((navLink, i) => (
                  <Fragment key={i}>
                    {!navLink.dropdown ? (
                      <button className="block" onClick={() => close()}>
                        <NavLink
                          href={navLink.href}
                          {...(navLink.customProps ? navLink.customProps : {})}
                        >
                          {navLink.name}{" "}
                          {navLink.customProps?.target && (
                            <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
                          )}
                        </NavLink>
                      </button>
                    ) : (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={`block font-writing underline-offset-1 whitespace-nowrap ${
                                router.pathname.includes(navLink.href)
                                  ? "font-bold"
                                  : "font-normal"
                              }`}
                            >
                              {navLink.name}{" "}
                              <TreeDown
                                className={`w-4 h-4 inline-block transition-transform duration-200 ${
                                  open ? "-scale-y-[1]" : ""
                                }`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel>
                              {navLink.dropdown?.map((item, i) => (
                                <button
                                  key={i}
                                  onClick={() => close()}
                                  className="block"
                                >
                                  <Link href={item.href}>
                                    <a
                                      className={`block ml-3 font-writing ${
                                        router.pathname === item.href
                                          ? "font-extrabold"
                                          : "font-normal"
                                      }`}
                                      target={item.customProps?.target || ""}
                                    >
                                      {item.name}{" "}
                                      {item.customProps?.target && (
                                        <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
                                      )}
                                    </a>
                                  </Link>
                                </button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </Fragment>
                ))}
              </ul>
            )}
          </Popover.Panel>
        </div>
      )}
    </Popover>
  );
}
