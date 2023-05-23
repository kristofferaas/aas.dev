import { cachedFetch } from "@/lib/sanity";
import ArticleCard from "./article-card";

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
    <article className="container max-w-2xl my-8">
      <h1 className="text-2xl font-semibold my-8">Articles</h1>
      <div className="grid grid-cols-2 gap-4 ">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </article>
  );
}
