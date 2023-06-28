import { defineField, defineType } from "sanity";

export const venue = defineType({
  name: "venue",
  title: "Venue",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bannerImage",
      title: "Banner image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
