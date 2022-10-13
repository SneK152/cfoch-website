import Banner from "@components/layout/Banner";
import Embed from "@components/pages/media/Embed";
import Page from "@lib/types/Page";

const Media: Page = () => {
  return (
    <>
      <Banner title="Media" />
      <Embed />
    </>
  );
};

Media.title = "Media";

export default Media;
