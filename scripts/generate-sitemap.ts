import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc");

  // Define static pages with their priorities and change frequencies
  const staticPages = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "/ethereum-monitoring", priority: "0.9", changefreq: "weekly" },
    { path: "/gnosis-monitoring", priority: "0.9", changefreq: "weekly" },
    { path: "/features", priority: "0.8", changefreq: "monthly" },
    { path: "/faq", priority: "0.8", changefreq: "monthly" },
  ];

  const baseUrl = "https://node-sentinel.xyz";

  // Generate the sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page.path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${page.changefreq}</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  // Format the XML and wait for completion
  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // Write the file
  writeFileSync("public/sitemap.xml", formatted);

  console.log("✅ Sitemap generated with static pages!");
}

// Handle errors in the async function
generate().catch((error) => {
  console.error("Error generating sitemap:", error);
  process.exit(1);
});
