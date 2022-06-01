import Page from "@lib/types/Page";
import { GetServerSideProps } from "next";

const ApplyPage: Page = () => {
  return <></>;
};

ApplyPage.title = "Apply";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination:
        "https://docs.google.com/forms/d/e/1FAIpQLSczJyYB7LDMGgFm_6gDusCvSqLjBUmOCGENQkE_hmcqwbcg3A/viewform",
      permanent: true,
    },
  };
};

export default ApplyPage;
