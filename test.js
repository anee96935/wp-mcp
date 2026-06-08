import { listPosts } from "./tools/listPosts.js";

const posts = await listPosts();

console.log(posts);