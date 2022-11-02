import Banner from "@components/layout/Banner";
import Section from "@components/pages/organization/Section";
import Page from "@lib/types/Page";

const Organization: Page = () => {
  return (
    <>
      <Banner title="About Our Organization" />
      <Section side="left" image="/homepage.jpeg" title="Our Mission">
        Research shows that although students take many courses on environmental
        issues, their environmentally-aware actions are lower than expected.
        Environmental knowledge does not always influence awareness and
        behavioral intentions, and more inspirations are needed to enhance
        effectiveness. In response to this, CFOCH is an initiative to offer a
        platform for environmental innovations and ideas to youth, as well as
        facilitate individuals to uphold their responsibilities and take care of
        the environment, regardless of age or environmental attitude. While
        young people may not be able to create a particularly strong impact just
        by themselves, by spreading awareness and contributing small works along
        the goal, we envision inspiring individuals and corporations to amplify
        their contributions to fulfill their roles in environmental justice.
      </Section>
      <Section side="right" image="/homepage.jpeg" title="Our Name">
        The name of our foundation comes from the subtitle to Pope Francis{"'"}s
        encyclical Laudato Si{"'"}, “on care for our common home”. In it, the
        Pope makes a statement on how climate change is real and calls all
        people of the world to take {'"'}swift and unified global action{'"'} to
        care for the world of nature. To learn more about his ethical analysis
        and our values, we encourage everyone to read the book or watch this{" "}
        <a
          href="https://theletterfilm.org/Watch/?eType=EmailBlastContent&eId=af060cab-cf93-44e8-b152-07b3b9ce50c2&fbclid=IwAR1yeKTWLnNUJuYDpiPREdgrpbBIaEPmqDFOc8cM3hDK054d-uI-J_j9UiQ"
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-500 underline"
        >
          documentary
        </a>
        .
      </Section>
      <Section side="left" image="/homepage.jpeg" title="Our Beliefs">
        <ul className="list-disc">
          <li>
            It is a social responsibility to take care of our environment. This
            applies to corporations as well as individuals.
          </li>
          <li>
            We believe in environmental justice. The pollution of our common
            home is a moral issue.
          </li>
          <li>
            We believe in the power of youth to improve our environment. It is
            something anyone can partake in regardless of age. We believe youth
            can do a lot to create a hope-filled future.
          </li>
          <li>
            We believe in educating people on climate change. This raises
            awareness and will allow people to subsequently take interest in
            fighting climate change themselves. Participation is key.
          </li>
          <li>
            We believe in making use of both new sustainable technologies and
            social changes to improve our environment.
          </li>
        </ul>
      </Section>
    </>
  );
};

Organization.title = "Our Organization";

export default Organization;
