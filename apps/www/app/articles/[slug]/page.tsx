import { cachedFetch } from "@/lib/sanity";
import Article from "@/components/article";

const getArticleBySlug = async (slug: string) => {
  return await cachedFetch("*[slug.current == $slug][0]", {
    slug,
  });
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  return (
    <div className="container max-w-2xl">
      <Article value={article.body} />
    </div>
  );
}
