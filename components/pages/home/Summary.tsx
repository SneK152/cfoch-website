import Button from "@components/layout/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { homepageCarouselImages } from "@lib/data/images";
import Image from "next/image";
import { useSpringCarousel } from "react-spring-carousel";
import { Header } from "./Header";

export default function Summary() {
  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
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
            className="select-none"
            draggable={false}
          />
        ),
      })),
    });

  return (
    <div className="p-10 space-y-2 padded-section">
      <Header>Summary</Header>
      <div className="w-full flex flex-col gap-5 overflow-hidden">
        <div className="grid place-items-center">
          <p className="text-xl font-light">
            Care for our Common Home Foundation is committed to journeying with
            youth to create a platform for promoting environmental and social
            innovations, aiming to uphold environmental justice and realize
            sustainable development. Our goal is to improve the common home we
            share by enhancing environmental awareness and doing our part of
            each person{"'"}s social responsibility, regardless of age, to
            create a hope-filled future.
          </p>
        </div>
        <div className="relative overflow-hidden bg-white rounded-xl cursor-grab active:cursor-grabbing shadow-md h-96">
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
    </div>
  );
}
