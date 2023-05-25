import type { PortableTextBlockComponent } from "@portabletext/react";

export const Heading1: PortableTextBlockComponent = (props) => {
  return (
    <h1 className="mt-12 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
};

export const Heading2: PortableTextBlockComponent = (props) => {
  return (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {props.children}
    </h2>
  );
};

export const Heading3: PortableTextBlockComponent = (props) => {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
};

export const Heading4: PortableTextBlockComponent = (props) => {
  return (
    <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
};

export const Paragraph: PortableTextBlockComponent = (props) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>
  );
};

export const BlockQuote: PortableTextBlockComponent = (props) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.children}
    </blockquote>
  );
};
