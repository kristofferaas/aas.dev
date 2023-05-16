import { createClient, SanityClient } from "next-sanity";
import { cache } from "react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const IS_PRODUCTION = process.env.NODE_ENV === "production";

const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: IS_PRODUCTION, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

// Wrap the cache function in a way that reuses the TypeScript definitions
export const cachedFetch: SanityClient["fetch"] = cache(
  client.fetch.bind(client)
);

export default client;
