import React from "react";
import { app } from "../lib";

function createSitemap() {
  const site_root = app.url.domain;

  let XML = `
    <url>
      <loc>${site_root}/</loc>
      <lastmod>2020-10-08</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.00</priority>
    </url>
  `;

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${XML}
    </urlset>`;
}

class Sitemap extends React.Component {}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
  return { props: { status: 200 } };
}

export default Sitemap;
