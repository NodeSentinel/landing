import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc");

  // Obtiene todas las rutas de páginas
  const pages = await globby([
    "app/**/*.tsx",
    "!app/**/_*.tsx", // Excluye archivos que empiezan con _
    "!app/**/layout.tsx", // Excluye layouts
    "!app/**/loading.tsx", // Excluye loading
    "!app/**/error.tsx", // Excluye error
  ]);

  const baseUrl = "https://node-sentinel.xyz";

  // Genera las URLs del sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          // Convierte la ruta del archivo a URL
          const path = page
            .replace("app", "")
            .replace("/page.tsx", "")
            .replace(".tsx", "");

          const route = path === "/index" ? "" : path;

          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${route === "" ? "1.0" : "0.7"}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  // Formatea el XML y espera a que se complete
  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // Escribe el archivo
  writeFileSync("public/sitemap.xml", formatted);

  console.log("✅ Sitemap generated!");
}

// Maneja errores en la función asíncrona
generate().catch((error) => {
  console.error("Error generating sitemap:", error);
  process.exit(1);
});
