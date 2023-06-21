import { PortableTextMarkComponent } from "@portabletext/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
} from "ui";
import { Link as LinkIcon } from "lucide-react";

export const Link: PortableTextMarkComponent = (props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a className="text-pink-500 hover:underline" href={props.value.href}>
            {props.children}
          </a>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent className="flex flex-row items-center">
            <LinkIcon className="mr-2 h-4 w-4" />
            <a className="text-pink-500 underline" href={props.value.href}>
              {props.value.href}
            </a>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};

export const Italic: PortableTextMarkComponent = (props) => {
  return <em className="italic">{props.children}</em>;
};

export const Bold: PortableTextMarkComponent = (props) => {
  return <strong className="font-bold">{props.children}</strong>;
};

export const Code: PortableTextMarkComponent = (props) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {props.children}
    </code>
  );
};

export const Underline: PortableTextMarkComponent = (props) => {
  return <u className="underline">{props.children}</u>;
};

export const StrikeThrough: PortableTextMarkComponent = (props) => {
  return <s className="line-through">{props.children}</s>;
};
