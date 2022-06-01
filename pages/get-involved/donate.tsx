import Banner from "@components/layout/Banner";
import DonationGrid from "@components/pages/donate/DonationGrid";
import Page from "@lib/types/Page";

const Donate: Page = () => {
  return (
    <>
      <Banner title="Donate" />
      <DonationGrid />
    </>
  );
};

Donate.title = "Donate";

export default Donate;
