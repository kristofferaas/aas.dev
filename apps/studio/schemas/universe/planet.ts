import { defineType } from "sanity";

export const planet = defineType({
  name: "planet",
  title: "Planet",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "star",
      title: "Star",
      type: "reference",
      to: [{ type: "star" }],
    },
  ],
});
