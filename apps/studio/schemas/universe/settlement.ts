import { defineField, defineType } from "sanity";

export const settlement = defineType({
  name: "settlement",
  title: "Settlement",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "planet",
      title: "Planet",
      type: "reference",
      to: [{ type: "planet" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
