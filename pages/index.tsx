import Summary from "@components/pages/home/Summary";
import Hero from "@components/pages/home/Hero";
import Page from "@lib/types/Page";
import About from "@components/pages/home/About";
import Buttons from "@components/pages/home/Buttons";

const Home: Page = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Buttons />
      <About />
    </>
  );
};

Home.title = "Home";

export default Home;
