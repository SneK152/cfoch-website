import Banner from "@components/layout/Banner";
import PreviousEvents from "@components/pages/events/PreviousEvents";
import UpcomingEvents from "@components/pages/events/UpcomingEvents";
import Page from "@lib/types/Page";

const Events: Page = () => {
  return (
    <>
      <Banner title="Events" />
      <UpcomingEvents />
      <PreviousEvents />
    </>
  );
};

Events.title = "Events";

export default Events;
