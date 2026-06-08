import { wp } from "../wordpress.js";

export async function deletePost(postId) {
  const response = await wp.delete(
    `/posts/${postId}?force=true`
  );

  return response.data;
}