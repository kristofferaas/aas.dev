import { createClient, SanityClient } from "next-sanity";
import { cache } from "react";
import { env } from "./env";

const client: SanityClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION, // https://www.sanity.io/docs/api-versioning
  useCdn: env.NODE_ENV === "production", // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

// Wrap the cache function in a way that reuses the TypeScript definitions
export const cachedFetch: SanityClient["fetch"] = cache(
  client.fetch.bind(client)
);

export default client;
