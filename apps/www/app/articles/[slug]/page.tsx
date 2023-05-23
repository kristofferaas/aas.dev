import { cachedFetch } from "@/lib/sanity";
import { z } from "zod";

const blockSchema = z
  .object({
    _key: z.string(),
    _type: z.enum(["block"]),
    style: z.enum(["normal"]),
    markDefs: z.array(z.unknown()),
    children: z.array(z.object({ _type: z.enum(["span"]), text: z.string() })),
  })
  .passthrough();

type Block = z.infer<typeof blockSchema>;

const articleSchema = z
  .object({
    _id: z.string(),
    title: z.string(),
    body: blockSchema.array(),
  })
  .passthrough();

type Article = z.infer<typeof articleSchema>;

const getArticleBySlug = async (slug: string) => {
  const data = await cachedFetch<Article>("*[slug.current == $slug][0]", {
    slug,
  });
  return articleSchema.parse(data);
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  return (
    <article className="container max-w-2xl my-8">
      <h1 className="text-2xl font-semibold my-8">{article.title}</h1>
      <ul className="space-y-4">
        {article.body.map((block) => (
          <li key={block._key}>{block.children.map((child) => child.text)}</li>
        ))}
      </ul>
    </article>
  );
}
