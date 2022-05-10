import Banner from "@components/layout/Banner";
import Section from "@components/pages/organization/Section";
import Page from "@lib/types/Page";

const Organization: Page = () => {
  return (
    <>
      <Banner title="Our Organization" />
      <Section side="left" image="/homepage.jpeg" title="Title here">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et
        ultrices neque ornare aenean. Interdum varius sit amet mattis vulputate
        enim nulla aliquet. In nisl nisi scelerisque eu ultrices vitae auctor eu
        augue. Odio morbi quis commodo odio aenean sed adipiscing diam.
      </Section>
      <Section side="right" image="/homepage.jpeg" title="Title here">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et
        ultrices neque ornare aenean. Interdum varius sit amet mattis vulputate
        enim nulla aliquet. In nisl nisi scelerisque eu ultrices vitae auctor eu
        augue. Odio morbi quis commodo odio aenean sed adipiscing diam.
      </Section>
    </>
  );
};

Organization.title = "Our Organization";

export default Organization;
