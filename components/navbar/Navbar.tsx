import { Disclosure, Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import navLinks from "@lib/data/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
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
                <p className="font-bold font-display text-xl">CFOCH</p>
                <div className="hidden sm:block">
                  <div className="flex gap-4 items-center h-full">
                    {navLinks.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={`${
                            router.pathname === item.href ? "font-bold" : ""
                          } rounded-md text-base`}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Popover.Panel className="sm:hidden absolute bg-lightgreen w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((item) => (
                <Popover.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block text-base ${
                    router.pathname === item.href ? "font-bold" : ""
                  }`}
                >
                  {item.name}
                </Popover.Button>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
