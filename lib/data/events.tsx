import CEvent from "@lib/types/CEvent";
import Image from "next/image";

const events: CEvent[] = [
  {
    name: "Lynbrook High School Student-Led Ecofeminism Protest Speech",
    media: <img src="/media.png" alt="Protest images" />,
    description: (
      <>
        All photos taken by Sruti Elangovan (@srutielangovanphoto) on May 18,
        2022
      </>
    ),
    type: "previous",
  },
  {
    name: "East meets West Talk - Caring for our Common Home",
    description: <></>,
    media: (
      <iframe
        src="https://www.youtube.com/embed/53LbDXQ5Mfk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full sm:w-96 sm:h-96"
      ></iframe>
    ),
    type: "previous",
  },
];

export default events;
