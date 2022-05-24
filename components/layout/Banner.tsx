import Image from "next/image";

interface BannerProps {
  title: string;
}

export default function Banner(props: BannerProps) {
  return (
    // <div className="h-[calc(100vh-4rem)] w-full relative">
    //   <div className="z-10 absolute w-full h-full bg-darkgreen text-white mix-blend-multiply" />
    //   <div className="z-20 relative h-full w-full text-white flex gap-4 flex-col justify-center">
    //     <h1 className="text-center text-7xl font-bold font-display">
    //       {props.title}
    //     </h1>
    //   </div>
    //   <Image
    //     src="/homepage.jpeg"
    //     layout="fill"
    //     quality={80}
    //     alt="Image of a mushroom surrounded by grass"
    //     objectFit="cover"
    //     className="object-center z-0 select-none selection:hidden"
    //     draggable={false}
    //   />
    // </div>
    <div className="w-full h-[calc(75vh-4rem)] flex justify-center relative overflow-hidden">
      <div className="w-0 h-0 absolute border-l-[90vw] lg:border-l-[40vw] border-l-transparent border-r-[90vw] lg:border-r-[40vw] border-r-transparent border-t-[90vw] lg:border-t-[40vw] border-t-darkgreen scale-y-[0.7] -translate-y-[15vw] lg:-translate-y-[7.5vw] z-20 mix-blend-multiply" />
      <div className="bg-blue w-full h-[5.25vw] absolute z-10 mix-blend-color" />
      <div className="w-0 h-0 absolute border-l-[90vw] lg:border-l-[40vw] border-l-transparent border-r-[90vw] lg:border-r-[40vw] border-r-transparent border-t-[90vw] lg:border-t-[40vw] border-t-blue scale-y-[0.7] -translate-y-[2vw] mix-blend-color lg:-translate-y-[2.3vw] z-10" />
      <Image
        src="/homepage.jpeg"
        layout="fill"
        quality={80}
        alt="Image of a mushroom surrounded by grass"
        objectFit="cover"
        className="object-center z-0 select-none selection:hidden"
        draggable={false}
        priority
      />
      <div className="bg-transparent w-full flex justify-center mt-[10vh] z-30">
        <h1 className="text-white font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl max-w-[15ch] text-center">
          {props.title}
        </h1>
      </div>
    </div>
  );
}
