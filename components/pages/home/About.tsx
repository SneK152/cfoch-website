import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { homepageCarouselImages } from "@lib/data/images";
import Image from "next/image";
import { useTransitionCarousel } from "react-spring-carousel";

export default function About() {
  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useTransitionCarousel({
      withLoop: true,
      items: homepageCarouselImages.map((i) => ({
        id: i,
        renderItem: (
          <Image
            src={i}
            alt="Carousel image"
            layout="fill"
            loading="eager"
            quality={100}
            objectFit="cover"
            className="select-none rounded-xl"
          />
        ),
      })),
      disableGestures: true,
    });
  return (
    <div className="w-full h-96 grid grid-cols-3 gap-3 p-10">
      <div className="relative overflow-hidden bg-white rounded-xl">
        <button
          className="absolute h-full top-0 bottom-0 left-0 z-[1] flex items-center justify-center sm:w-[10%] w-[15%] p-0 text-white text-center bg-none border-0"
          onClick={slideToPrevItem}
        >
          <ChevronLeftIcon className="w-9 h-9 p-1" />
        </button>
        {carouselFragment}
        <button
          className="absolute h-full top-0 bottom-0 right-0 z-[1] flex items-center justify-center sm:w-[10%] w-[15%] p-0 text-white text-center bg-none border-0"
          onClick={slideToNextItem}
        >
          <ChevronRightIcon className="w-9 h-9 p-1" />
        </button>
      </div>
    </div>
  );
}
