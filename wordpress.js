import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const wp = axios.create({
  baseURL: `${process.env.WP_URL}/wp-json/wp/v2`,
  auth: {
    username: process.env.WP_USERNAME,
    password: process.env.WP_APP_PASSWORD,
  },
  headers: {
    "Content-Type": "application/json",
  },
});