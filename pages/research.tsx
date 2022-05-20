import Banner from "@components/layout/Banner";
import ArticleGrid from "@components/pages/research/ArticleGrid";
import Page from "@lib/types/Page";

const Research: Page = () => {
  return (
    <>
      <Banner title="Research" />
      <ArticleGrid />
    </>
  );
};

Research.title = "Research";

export default Research;
