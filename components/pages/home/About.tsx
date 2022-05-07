import Button from "@components/layout/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { homepageCarouselImages } from "@lib/data/images";
import Image from "next/image";
import { useSpringCarousel } from "react-spring-carousel";

export default function About() {
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
    <div className="w-full h-96 grid grid-cols-12 gap-10 p-10">
      <div className="relative overflow-hidden bg-white rounded-xl cursor-grab active:cursor-grabbing col-span-4">
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
      <div className="grid place-items-center col-span-5">
        <p className="text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
          pharetra et ultrices neque ornare aenean. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Mauris pharetra et ultrices neque
          ornare aenean.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 col-span-3">
        <Button className="bg-darkgreen text-white text-lg w-full">
          Learn More
        </Button>
        <Button className="bg-black text-white text-lg w-full">
          Upcoming Events
        </Button>
        <Button className="bg-lightgreen text-black text-lg w-full">
          Get Involved
        </Button>
      </div>
    </div>
  );
}
