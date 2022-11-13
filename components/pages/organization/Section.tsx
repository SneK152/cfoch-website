import { ReactNode } from "react";
import Image from "next/image";

interface SectionProps {
  side: "left" | "right";
  image: string;
  children: ReactNode;
  title: string;
}

export default function Section(props: SectionProps) {
  return (
    <div className="w-full grid p-6 gap-5 grid-cols-12 min-h-[24rem]">
      <div
        className={`sm:col-span-5 col-span-12 relative h-36 w-full sm:h-full ${
          props.side === "left" ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <Image
          src={props.image}
          alt="Image of a mushroom surrounded by grass"
          layout="fill"
          quality={80}
          objectFit="cover"
          className="object-center z-0 select-none selection:hidden"
          draggable={false}
        />
      </div>
      <div
        className={`sm:col-span-7 col-span-12 sm:px-10 px-5 flex flex-col justify-center ${
          props.side === "left" ? "sm:order-2" : "sm:order-1"
        }`}
      >
        <h1 className="text-3xl font-display font-bold">{props.title}</h1>
        <p className="text-xl">{props.children}</p>
      </div>
    </div>
  );
}
