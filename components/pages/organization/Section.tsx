import { ReactNode } from "react";
import Image from "next/image";

interface SectionProps {
  side: "left" | "right";
  image: string;
  children: ReactNode;
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
        className={`col-span-7 ${
          props.side === "left" ? "order-2" : "order-1"
        }`}
      >
        <p>hsdf</p>
      </div>
    </div>
  );
}
