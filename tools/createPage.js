import { wp } from "../wordpress.js";

export async function createPage(title, content) {
  const response = await wp.post("/pages", {
    title,
    content,
    status: "publish",
  });

  return response.data;
}