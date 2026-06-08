import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function createPost() {
  const response = await axios.post(
    `${process.env.WP_URL}/wp-json/wp/v2/posts`,
    {
      title: "MCP Test Post",
      content: "<p>This post was created by MCP.</p>",
      status: "draft"
    },
    {
      auth: {
        username: process.env.WP_USERNAME,
        password: process.env.WP_APP_PASSWORD
      }
    }
  );

  console.log(response.data.id);
  console.log(response.data.link);
}

createPost();