import CEvent from "@lib/types/CEvent";

const events: CEvent[] = [
  {
    name: "East meets West Talk - Caring for our Common Home",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Diam donec
        adipiscing tristique risus nec feugiat in fermentum. Est ullamcorper
        eget nulla facilisi etiam dignissim.
      </>
    ),
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
