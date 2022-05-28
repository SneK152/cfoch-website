import Page from "@lib/types/Page";
import { readdirSync, readFileSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Banner from "@components/layout/Banner";

interface ResearchData {
  title: string;
  date: string;
  sources: string[];
}

const ResearchArticle: Page<{
  data: ResearchData;
  content: string;
}> = ({ data, content }) => {
  return (
    <>
      <Banner title={data.title} />
      <div className="prose max-w-[100ch] lg:prose-lg prose-stone mx-auto px-2 py-5 sm:px-6 lg:px-8">
        <h2>{data.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <h3>Sources Used</h3>
        <ul>
          {data.sources.map((source) => (
            <li key={source}>
              <a href={source} target="_blank" rel="noreferrer noopener">
                {source}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
ResearchArticle.title = "";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const path = join(process.cwd(), "lib/research", slug + ".md");
  const file = readFileSync(path);
  const { data, content: rawContent } = matter(file);
  const content = remark().use(remarkHtml).processSync(rawContent).toString();
  return {
    props: {
      data,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync(join(process.cwd(), "lib/research"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export default ResearchArticle;
