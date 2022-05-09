import Image from "next/image";

interface BannerProps {
  title: string;
}

export default function Banner(props: BannerProps) {
  return (
    <div className="h-[calc(100vh-4rem)] w-full relative">
      <div className="z-10 absolute w-full h-full bg-darkgreen text-white mix-blend-multiply" />
      <div className="z-20 relative h-full w-full text-white flex gap-4 flex-col justify-center">
        <h1 className="text-center text-7xl font-bold font-display">
          {props.title}
        </h1>
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
