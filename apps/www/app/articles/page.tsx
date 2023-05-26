import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { cachedFetch } from "@/lib/sanity";
import Link from "next/link";

type Article = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  body: unknown[];
  excerpt: string;
};

const getArticles = async () => {
  return await cachedFetch<Article[]>(
    "*[_type == 'article'] | order(_createdAt desc)"
  );
};

export default async function ArticleOverviewPage() {
  const articles = await getArticles();

  return (
    <main className="container max-w-2xl my-8">
      <Typography variant="h1" className="mb-8">
        Articles
      </Typography>
      <ol className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/articles/${article.slug.current}`}
            className="block"
          >
            <Card className="hover:shadow-lg transition-shadow ease-in">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>
                  {new Date(article._createdAt).toDateString()}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </ol>
    </main>
  );
}
