import Hero from "@components/pages/home/Hero";
import Page from "@lib/types/Page";

const Home: Page = () => {
  return (
    <>
      <Hero />
    </>
  );
};

Home.title = "Home";

export default Home;
