import { cachedFetch } from "@/lib/sanity";
import Link from "next/link";

type Article = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: unknown[];
};

const getArticles = async () => {
  return await cachedFetch<Article[]>("*[_type == 'article']");
};

export default async function ArticleOverviewPage() {
  const articles = await getArticles();

  return (
    <article className="container mx-auto">
      <h1>Portfolio</h1>
      <ol>
        {articles.map((article) => (
          <Link
            key={article.slug.current}
            href={`/articles/${article.slug.current}`}
          >
            {article.slug.current}
          </Link>
        ))}
      </ol>
    </article>
  );
}
