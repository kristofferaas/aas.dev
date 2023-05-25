// list: {
//   bullet: (props) => (
//     <ul className="list-disc list-inside my-8">{props.children}</ul>
//   ),
//   number: (props) => (
//     <ol className="list-decimal list-inside my-8">{props.children}</ol>
//   ),
// },
// listItem: {
//   bullet: (props) => <li className="my-2">{props.children}</li>,
//   number: (props) => <li className="my-2">{props.children}</li>,
// },

import {
  PortableTextListComponent,
  PortableTextListItemComponent,
} from "@portabletext/react";

export const BulletList: PortableTextListComponent = (props) => {
  return <ul className="my-6 ml-6 list-disc">{props.children}</ul>;
};

export const BulletListItem: PortableTextListItemComponent = (props) => {
  return <li className="mt-2">{props.children}</li>;
};

export const NumberList: PortableTextListComponent = (props) => {
  return <ol className="my-6 ml-6 list-decimal">{props.children}</ol>;
};

export const NumberListItem: PortableTextListItemComponent = (props) => {
  return <li className="mt-2">{props.children}</li>;
};
