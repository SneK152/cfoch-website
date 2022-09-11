import Button from "@components/layout/Button";

export default function Buttons() {
  return (
    <div className="flex justify-center items-center gap-3 pt-1 pb-10 col-span-3 padded-section">
      <Button
        className="bg-darkgreen text-white text-lg w-full max-w-[20rem]"
        href="/about/organization"
      >
        Learn More
      </Button>
      <Button
        className="bg-black text-white text-lg w-full max-w-[20rem]"
        href="/events"
      >
        Upcoming Events
      </Button>
      <Button
        className="bg-lightgreen text-black text-lg w-full max-w-[20rem]"
        href="/get-involved/donate"
      >
        Donate
      </Button>
    </div>
  );
}
