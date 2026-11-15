import { GetServerSideProps } from "next";

const EXTERNAL_DATA_URL = "https://neoncobratattoo.com";

function generateSiteMap(pages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://sitemaps.org">
     ${pages
       .map((route) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${route}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>${route === "" ? "1.0" : "0.8"}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPages = ["", "/a-propos", "/artists/"];

  const sitemap = generateSiteMap(staticPages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {
  return null;
}
