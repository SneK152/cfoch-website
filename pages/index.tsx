import About from "@components/pages/home/About";
import Hero from "@components/pages/home/Hero";
import Images from "@components/pages/home/Images";
import Page from "@lib/types/Page";

const Home: Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Images />
    </>
  );
};

Home.title = "Home";

export default Home;
