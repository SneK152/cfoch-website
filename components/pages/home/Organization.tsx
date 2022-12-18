import Section from "../organization/Section";

export default function Organization() {
  return (
    <>
      <Section
        side="left"
        image="https://source.unsplash.com/random/?nature"
        title="Our Mission"
      >
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
      <Section
        side="right"
        image="https://source.unsplash.com/random/?globe"
        title="Our Name"
      >
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
      <Section
        side="left"
        image="https://source.unsplash.com/random/?moral"
        title="Our Beliefs"
      >
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
        We believe that the entire earth is our shared home: There may be
        boundaries dividing different countries, but the Earth does not behave
        according to those boundaries; it is one whole planet that suffers as a
        whole if one part is not taken care of immediately. Think of the Earth
        as a house: when there is something broken, you would naturally want to
        fix it. If there is a leak in your roof, even if the leak is somewhere
        you don{"'"}t usually spend time in like a sibling{"'"}s room,
        eventually, you will experience the effects of the leak when your
        sibling has to move to your room, or when rainwater begins to flood the
        hallways. Your home is your shelter and you depend on it, just like we
        all depend on the Earth to keep us alive and healthy. Even if you may
        not be experiencing the effects of pollution or climate-related issues
        now, other places are, and by helping other places, you are still
        helping yourself. It is each person{"'"}s responsibility to take care of
        our Earth, regardless of the immediate impact of pollution or climate
        change.
      </Section>
      <Section
        side="right"
        image="https://source.unsplash.com/random/?teamwork"
        title="Our Values"
      >
        <ul className="list-disc">
          <li>
            Community - We value coming together to improve the environment. No
            one person can reverse climate change on their own.
          </li>
          <li>
            Innovation - We promote the innovation of new technology that won
            {"'"}t hurt the environment. We also promote implementing these new
            technologies. We recognize that many of the technologies for green
            energy exist, they just aren{"'"}t being used enough.
          </li>
          <li>
            Progress - It is crucial to move forward in the fight against
            climate change. We cannot afford to stay stagnant.
          </li>
          <li>
            Responsibility - We believe in each person{"'"}s obligation to do
            their part in improving the environment.
          </li>
          <li>
            Awareness - We spread information about climate change so that
            others can take action too.
          </li>
          <li>
            Action - We encourage people to take action against climate change
            whether it is through volunteering, voting, boycotts, supporting
            eco-friendly businesses, or lifestyle changes.
          </li>
        </ul>
      </Section>
      <Section
        side="left"
        image="https://source.unsplash.com/random/?achievement"
        title="Our Goals"
      >
        <ul className="list-disc">
          <li>
            Empower youth to take action and create a community of people who
            fight against climate change
          </li>
          <li>Advocate environmental justice</li>
          <li>Research and dispel myths about climate change</li>
          <li>Cultivate concern for the environment in public opinion</li>
          <li>
            Organize lectures and workshops, online and in person, with
            volunteers in colleges and high schools for audiences who are
            interested in the environment and social justice issues.
          </li>
          <li>
            Maintain a website and social media platforms to promote relevant
            educational content, including feature articles contributed by
            students and researchers.{" "}
          </li>
          <li>Give youth an opportunity to fight for a brighter future</li>
        </ul>
      </Section>
      <Section
        side="right"
        image="https://source.unsplash.com/random/?help"
        title="How You Can Help"
      >
        <ul>
          <li>
            <a
              href="/get-involved/apply"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-500 underline"
            >
              Volunteer
            </a>{" "}
            for or{" "}
            <a
              href="/get-involved/donate"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-500 underline"
            >
              donate
            </a>{" "}
            to local environmental nonprofits
          </li>
          <li>
            Educate yourself and others on small everyday changes, for example
            ripping the elastic bands off of masks before throwing them away to
            prevent animals from being caught in them.
          </li>
          <li>
            With the proper equipment, pick up trash and recyclables in your
            neighborhood
          </li>
          <li>Reduce the use of plastics</li>
        </ul>
        Care for our Common Home Foundation is a certifying organization of the
        President{"'"}s Volunteer Service Award.
      </Section>
    </>
  );
}
