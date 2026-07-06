import { mkdirSync, writeFileSync } from "fs";
import { posts } from "../src/data/posts";
import { testimonials } from "../src/data/content";

mkdirSync("data/cms", { recursive: true });
writeFileSync("data/cms/posts.json", JSON.stringify(posts, null, 2));
writeFileSync("data/cms/testimonials.json", JSON.stringify(testimonials, null, 2));
console.log(`Seeded ${posts.length} posts and ${testimonials.length} testimonials`);
