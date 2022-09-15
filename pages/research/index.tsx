import Banner from "@components/layout/Banner";
import ArticleGrid from "@components/pages/research/ArticleGrid";
import research from "@lib/data/research";
import Page from "@lib/types/Page";

const Research: Page = () => {
  return (
    <>
      <Banner title="Research" />
      <ArticleGrid research={research} />
    </>
  );
};

Research.title = "Research";

export default Research;
