import { cachedFetch } from "@/lib/sanity";
import Article from "./article";
import type { ArbitraryTypedObject } from "@portabletext/types";

const getArticleBySlug = async (slug: string) => {
  return await cachedFetch<ArbitraryTypedObject>(
    "*[slug.current == $slug][0]",
    {
      slug,
    }
  );
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  return (
    <div className="container max-w-2xl my-8">
      <h1 className="text-2xl font-semibold my-8">{article.title}</h1>
      <Article value={article.body} />
    </div>
  );
}
