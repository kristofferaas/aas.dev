import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { env } from "./lib/env";
import { schemaTypes } from "./schemas";

export default defineConfig([
  {
    basePath: "/production", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

    name: "production",
    title: "Production",

    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",

    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    basePath: "/development", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

    name: "development",
    title: "Development",

    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "dev",

    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
]);
