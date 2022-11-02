import Summary from "@components/pages/home/Summary";
import Hero from "@components/pages/home/Hero";
import Page from "@lib/types/Page";
import Buttons from "@components/pages/home/Buttons";
import Preview from "@components/pages/home/Preview";

const Home: Page = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Buttons />
      <Preview />
    </>
  );
};

Home.title = "Home";

export default Home;
