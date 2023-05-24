"use client";

import { PortableText, PortableTextProps } from "@portabletext/react";

export default function Article(props: Pick<PortableTextProps, "value">) {
  return (
    <article>
      <PortableText value={props.value} components={portableTextComponents} />
    </article>
  );
}

const portableTextComponents: PortableTextProps["components"] = {
  block: {
    h1: (props) => (
      <h1 className="text-5xl font-bold my-8">{props.children}</h1>
    ),
    h2: (props) => (
      <h2 className="text-4xl font-bold my-8">{props.children}</h2>
    ),
    h3: (props) => (
      <h3 className="text-3xl font-bold my-8">{props.children}</h3>
    ),
    h4: (props) => (
      <h4 className="text-2xl font-bold my-8">{props.children}</h4>
    ),
    h5: (props) => (
      <h5 className="text-xl font-semibold my-8">{props.children}</h5>
    ),
    h6: (props) => (
      <h6 className="text-lg font-semibold my-8">{props.children}</h6>
    ),
    normal: (props) => <p className="my-8 text-base">{props.children}</p>,
    blockquote: (props) => (
      <blockquote className="my-8 text-base text-red-800">
        {props.children}
      </blockquote>
    ),
  },
  marks: {
    em: (props) => <em className="italic">{props.children}</em>,
    strong: (props) => <strong className="font-bold">{props.children}</strong>,
    code: (props) => (
      <code className="bg-gray-200 rounded px-1">{props.children}</code>
    ),
    underline: (props) => <u className="underline">{props.children}</u>,
    strikeThrough: (props) => <s className="line-through">{props.children}</s>,
    link: (props) => (
      <a className="text-blue-500 hover:text-blue-600" href={props.value.href}>
        {props.children}
      </a>
    ),
  },
  list: {
    bullet: (props) => (
      <ul className="list-disc list-inside my-8">{props.children}</ul>
    ),
    number: (props) => (
      <ol className="list-decimal list-inside my-8">{props.children}</ol>
    ),
  },
  listItem: {
    bullet: (props) => <li className="my-2">{props.children}</li>,
    number: (props) => <li className="my-2">{props.children}</li>,
  },
};
