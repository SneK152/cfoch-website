import navLinks from "@lib/data/navLinks";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

interface LinkPageProps {
  title: string;
  headingTitle: string;
}

export default function LinkPage(props: LinkPageProps) {
  const links = useMemo(
    () => navLinks.filter((l) => l.name.includes(props.title))[0].dropdown!,
    [props.title]
  );
  return (
    <div className="h-[calc(100vh-4rem)] w-full relative">
      <div className="z-10 absolute w-full h-full bg-darkgreen text-white mix-blend-multiply" />
      <div className="z-20 relative h-full w-full text-white flex gap-4 flex-col justify-center">
        <h1 className="text-center text-4xl sm:text-7xl font-bold font-display">
          {props.headingTitle}
        </h1>
        <div className="flex sm:flex-row flex-col justify-center gap-3 overflow-hidden items-center px-2 w-full py-5 max-w-[100rem] sm:px-6 lg:px-6 mx-auto">
          {links.map((l) => (
            <Link href={l.href} key={l.name}>
              <a
                className="text-black px-7 py-6 bg-light hover:bg-opacity-100 text-3xl sm:text-4xl rounded-lg bg-opacity-80 sm:hover:rounded-xl sm:hover:-translate-y-2 sm:transition-all sm:duration-300 shadow-lg w-full h-full sm:h-36 flex flex-col justify-center items-center"
                {...l.customProps}
              >
                {l.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Image
        src="/homepage.jpeg"
        layout="fill"
        quality={80}
        alt="Image of a mushroom surrounded by grass"
        objectFit="cover"
        className="object-center z-0 select-none selection:hidden"
        draggable={false}
      />
    </div>
  );
}
