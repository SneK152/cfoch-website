import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex justify-center relative overflow-hidden">
      <div className="w-0 h-0 absolute border-l-[100vw] lg:border-l-[50vw] border-l-transparent border-r-[100vw] lg:border-r-[50vw] border-r-transparent border-t-[100vw] lg:border-t-[50vw] border-t-darkgreen scale-y-[0.7] -translate-y-[15vw] lg:-translate-y-[7.5vw] -z-10" />
      <div className="bg-blue w-full h-[5.3vw] absolute -z-20" />
      <div className="w-0 h-0 absolute border-l-[100vw] lg:border-l-[50vw] border-l-transparent border-r-[100vw] lg:border-r-[50vw] border-r-transparent border-t-[100vw] lg:border-t-[50vw] border-t-blue scale-y-[0.7] -translate-y-[2vw] lg:-translate-y-[2.3vw] -z-20" />
      <Image
        src="/homepage.jpeg"
        layout="fill"
        alt="Image of a mushroom surrounded by grass"
        objectFit="cover"
        className="object-center -z-30"
      />
    </div>
  );
}
