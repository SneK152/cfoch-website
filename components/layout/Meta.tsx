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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/ms-icon-310x310.png" />
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
      <meta name="theme-color" content="#000000" />
      <title>
        {title} | {props.title}
      </title>
      <meta name="title" content={`${title} | ${props.title}`} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="14 days" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/images/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/images/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/images/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/images/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
