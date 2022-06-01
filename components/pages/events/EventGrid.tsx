import CEvent from "@lib/types/CEvent";

interface EventGridProps {
  events: CEvent[];
  title: string;
}

export default function EventGrid(props: EventGridProps) {
  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold font-display text-center">
        {props.title}
      </h1>
      {props.events.length !== 0 ? (
        <div
          className={`grid place-items-start mt-2 gap-5 ${
            props.events.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {props.events.map((event) => {
            return (
              <div
                className="bg-darkgreen w-full text-white shadow-md flex justify-center items-center flex-col gap-2 p-5 rounded-xl"
                key={event.name}
              >
                <h2 className="text-2xl text-center font-display">
                  {event.name}
                </h2>
                {event.time && <h3 className="text-center">{event.time}</h3>}
                <p className="text-lg text-center font-light">
                  {event.description}
                </p>
                {event.media}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="italic text-center pt-2">
          No events here! Check back later.
        </p>
      )}
    </div>
  );
}
