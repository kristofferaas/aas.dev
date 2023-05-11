import { createClient, SanityClient } from "next-sanity";
import { cache } from "react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2023-05-03"

const client: SanityClient = createClient({
  projectId: "nwgri7de",
  dataset: "dev",
  apiVersion: "2023-05-11", // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

// Wrap the cache function in a way that reuses the TypeScript definitions
export const cachedFetch: SanityClient["fetch"] = cache(
  client.fetch.bind(client)
);

export default client;
