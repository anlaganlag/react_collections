import Head from "next/head";
import { app } from "../../utils";

const HTMLMeta = () => (
  <Head>
    <title>{app.nameUpperCase}</title>
    <meta name="title" content={app.nameUpperCase} />
    <meta name="description" content={app.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={app.url.domain} />
    <meta property="og:title" content={app.nameUpperCase} />
    <meta property="og:description" content={app.description} />
    <meta property="og:image" content="/twpromo.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={app.url.domain} />
    <meta property="twitter:title" content={app.nameUpperCase} />
    <meta property="twitter:description" content={app.description} />
    <meta property="twitter:image" content="/twpromo.png" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default HTMLMeta;
