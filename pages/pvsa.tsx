import Page from "@lib/types/Page";
import { GetServerSideProps } from "next";

const PVSAPage: Page = () => {
  return <></>;
};

PVSAPage.title = "Apply";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination:
        "https://docs.google.com/forms/d/e/1FAIpQLScT6oIynD2ddnhQvBQgJ-NV6S9D_abDiK9JUW4TQ6FeDU9Mnw/viewform?usp=sf_link",
      permanent: true,
    },
  };
};

export default PVSAPage;
