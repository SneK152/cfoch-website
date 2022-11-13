import Summary from "@components/pages/home/Summary";
import Hero from "@components/pages/home/Hero";
import Page from "@lib/types/Page";
import Buttons from "@components/pages/home/Buttons";
import Preview from "@components/pages/home/Preview";
import Organization from "@components/pages/home/Organization";
import Embed from "@components/pages/media/Embed";

const Home: Page = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Buttons />
      <Organization />
      <Embed />
      <Preview />
    </>
  );
};

Home.title = "Home";

export default Home;
