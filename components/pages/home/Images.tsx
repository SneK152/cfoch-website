import { homepageImageCollage } from "@lib/data/images";
import Image from "next/image";

export default function Images() {
  return (
    <div className="grid h-full w-full px-11 gap-6 grid-cols-4">
      {homepageImageCollage.map((i) => (
        <div key={i} className="relative">
          <Image
            src={i}
            alt="Image grid images"
            height={10000}
            width={10000}
            quality={70}
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
