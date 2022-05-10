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
    <div className="w-full grid grid-cols-12 h-96">
      <div
        className={`col-span-5 relative ${
          props.side === "left" ? "order-1" : "order-2"
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
        className={`col-span-7 px-10 flex flex-col justify-center ${
          props.side === "left" ? "order-2" : "order-1"
        }`}
      >
        <h1 className="text-3xl font-display font-bold">{props.title}</h1>
        <p className="text-xl">{props.children}</p>
      </div>
    </div>
  );
}
