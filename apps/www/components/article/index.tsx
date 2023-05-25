"use client";

import { PortableText, PortableTextProps } from "@portabletext/react";
import {
  BlockQuote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
} from "./block";
import { Bold, Code, Italic, Link, StrikeThrough, Underline } from "./marks";
import { BulletList, BulletListItem, NumberList, NumberListItem } from "./list";

export default function Article(props: Pick<PortableTextProps, "value">) {
  return (
    <article>
      <PortableText value={props.value} components={portableTextComponents} />
    </article>
  );
}

const portableTextComponents: PortableTextProps["components"] = {
  block: {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    normal: Paragraph,
    blockquote: BlockQuote,
  },
  marks: {
    em: Italic,
    strong: Bold,
    code: Code,
    underline: Underline,
    "strike-through": StrikeThrough,
    link: Link,
  },
  list: {
    bullet: BulletList,
    number: NumberList,
  },
  listItem: {
    bullet: BulletListItem,
    number: NumberListItem,
  },
};
