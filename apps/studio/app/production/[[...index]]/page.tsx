import { Studio } from "../../_studio";

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from "next-sanity/studio/metadata";

export default function StudioPage() {
  return <Studio />;
}
