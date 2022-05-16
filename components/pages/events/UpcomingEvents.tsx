import events from "@lib/data/events";
import { useMemo } from "react";
import EventGrid from "./EventGrid";

export default function UpcomingEvents() {
  const upcomingEvents = useMemo(
    () => events.filter((e) => e.type === "upcoming"),
    []
  );
  return <EventGrid events={upcomingEvents} title="Upcoming Events" />;
}
