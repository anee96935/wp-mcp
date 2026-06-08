import { wp } from "../wordpress.js";

export async function listPosts() {
  const response = await wp.get("/posts");

  return response.data.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    link: post.link,
  }));
}