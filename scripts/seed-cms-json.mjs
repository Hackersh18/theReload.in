import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Load TS data by evaluating — seed script run once via build or manual
import { pathToFileURL } from "url";

async function main() {
  mkdirSync("data/cms", { recursive: true });

  const postsPath = pathToFileURL("./src/data/posts.ts").href;
  const contentPath = pathToFileURL("./src/data/content.ts").href;

  const { posts } = await import(postsPath);
  const { testimonials } = await import(contentPath);

  writeFileSync("data/cms/posts.json", JSON.stringify(posts, null, 2));
  writeFileSync("data/cms/testimonials.json", JSON.stringify(testimonials, null, 2));
  console.log(`Seeded ${posts.length} posts, ${testimonials.length} testimonials`);
}

main().catch(console.error);
