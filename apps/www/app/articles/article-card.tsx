"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ArticleCardProps = {
  article: any;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card>
      <CardHeader>{article.title}</CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/articles/${article.slug.current}`}>
            Read more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
