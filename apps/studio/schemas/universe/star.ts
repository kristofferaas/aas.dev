import { defineField, defineType } from "sanity";

export const star = defineType({
  name: "star",
  title: "Star",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});
