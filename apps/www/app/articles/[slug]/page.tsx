import { cachedFetch } from "@/lib/sanity";
import Article from "@/components/article";
import { Aside } from "@/components/layout/aside";
import TableOfContents from "@/components/article/table-of-contents";
import { Main } from "@/components/layout/main";

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
    <Main>
      <Aside className="w-60 hidden lg:block">
        <TableOfContents article={article.body} />
      </Aside>
      <div className="container max-w-2xl mb-40">
        <Article value={article.body} />
      </div>
    </Main>
  );
}
