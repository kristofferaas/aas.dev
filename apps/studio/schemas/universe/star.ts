import { defineType } from "sanity";

export const star = defineType({
  name: "star",
  title: "Star",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
});
