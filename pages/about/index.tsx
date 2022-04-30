import navLinks from "@lib/data/navLinks";
import Page from "@lib/types/Page";

const links = navLinks.filter((l) => l.name.includes("About"))[0].dropdown!;

const AboutPage: Page = () => {
  return <h1>Hello world!</h1>;
};

AboutPage.title = "About";

export default AboutPage;
