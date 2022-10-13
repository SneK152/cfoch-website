import Banner from "@components/layout/Banner";
import TeamGrid from "@components/pages/team/TeamGrid";
import Page from "@lib/types/Page";

const Team: Page = () => {
  return (
    <>
      <Banner title="Our Team" />
      <TeamGrid />
    </>
  );
};

Team.title = "Our Team";
export default Team;
