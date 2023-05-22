import type { Route } from "next";
import Link from "next/link";

export default async function Page() {
  return (
    <article className="container mx-auto my-4">
      <h1 className="text-3xl mb-4">aas.dev</h1>
      <div className="flex flex-col">
        <RichLink href="/" title="Portfolio" />
        <RichLink href="/" title="About" />
        <RichLink href="/" title="Github" />
      </div>
    </article>
  );
}

type RichLinkProps<RouteType extends string> = {
  href: Route<RouteType>;
  title: React.ReactNode;
};

const RichLink = <RouteType extends string>({
  href,
  title,
}: RichLinkProps<RouteType>) => {
  return (
    <Link href={href} className="text-blue-500 hover:underline">
      {title} <span className="text-gray-500">→</span>
    </Link>
  );
};
