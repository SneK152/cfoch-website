import { description, keywords, title } from "@lib/data/constants";
import Head from "next/head";

interface MetaProps {
  title: string;
}

export default function Meta(props: MetaProps) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/logo.png" />
      <meta
        name="og:title"
        property="og:title"
        content={`${title} | ${props.title}`}
      />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content={`${title} | ${props.title}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} | ${props.title}`} />
      <meta name="twitter:description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="application-name" content={`${title} | ${props.title}`} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={`${title} | ${props.title}`}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <title>
        {title} | {props.title}
      </title>
      <meta name="title" content={`${title} | ${props.title}`} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="14 days" />
    </Head>
  );
}
