import research from "@lib/data/research";
import Link from "next/link";
import ArticleGrid from "../research/ArticleGrid";
import { Header } from "./Header";

export default function Preview() {
  return (
    <>
      <br />
      <Header>
        Research Preview
        <br />
        <Link href="/research">
          <a className="text-base font-sans font-normal underline hover:text-blue-600">
            Learn More
          </a>
        </Link>
      </Header>
      <ArticleGrid research={research.slice(0, 3)} />
    </>
  );
}
