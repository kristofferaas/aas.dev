"use client";

import { Image } from "@/app/venues/_types";
import client from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import NextImage from "next/image";
import React from "react";

interface ImageProps {
  src: Image;
  alt: string;
  className?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className }, ref) => {
    const imageProps = useNextSanityImage(client, src);

    return (
      <NextImage
        {...imageProps}
        ref={ref}
        alt={alt}
        className={className}
        placeholder="blur"
        blurDataURL={src.asset.metadata.lqip}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
