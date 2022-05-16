import events from "@lib/data/events";
import { useMemo } from "react";
import EventGrid from "./EventGrid";

export default function PreviousEvents() {
  const previousEvents = useMemo(
    () => events.filter((e) => e.type === "previous"),
    []
  );
  return <EventGrid events={previousEvents} title="Previous Events" />;
}
