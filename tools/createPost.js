import { wp } from "../wordpress.js";

export async function createPost(title, content) {
  const response = await wp.post("/posts", {
    title,
    content,
    status: "publish",
  });

  return response.data;
}