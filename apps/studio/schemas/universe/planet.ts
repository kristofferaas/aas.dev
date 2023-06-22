import { defineField, defineType } from "sanity";

export const planet = defineType({
  name: "planet",
  title: "Planet",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "star",
      title: "Star",
      type: "reference",
      to: [{ type: "star" }],
    }),
  ],
});
