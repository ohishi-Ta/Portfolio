import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "portfolio-oishi",
  apiKey: process.env.API_KEY || "",
});
