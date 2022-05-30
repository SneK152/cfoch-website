import About from "@components/pages/home/About";
import Hero from "@components/pages/home/Hero";
import Page from "@lib/types/Page";

const Home: Page = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

Home.title = "Home";

export default Home;
