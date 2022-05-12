import { homepageImageCollage } from "@lib/data/images";
import Image from "next/image";

export default function Images() {
  return (
    <div className="flex h-full w-full py-5 px-11 gap-6">
      {homepageImageCollage.map((i) => (
        <Image
          src={i}
          alt="Image grid images"
          height={10000}
          width={10000}
          quality={70}
          objectFit="cover"
          className="rounded-xl shadow-md"
          key={i}
        />
      ))}
    </div>
  );
}
