import { slugify } from "./utils";

type TableOfContentsProps = {
  article: any[];
};

const createTableOfContents = (article: any[]) => {
  const headings = article
    .filter((block) => block._type === "block")
    .filter((block) => block.style === "h2");
  return headings;
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ article }) => {
  const headings = createTableOfContents(article);
  return (
    <>
      {headings.map((heading) => {
        const slug = slugify(heading.children[0].text);
        return (
          <a
            key={heading._key}
            className="block text-gray-500 py-1 hover:text-gray-900 hover:underline cursor-pointer"
            href={`#${slug}`}
          >
            {heading.children[0].text}
          </a>
        );
      })}
    </>
  );
};

export default TableOfContents;
