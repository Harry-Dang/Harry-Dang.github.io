import React from "react";
import { useSiteMetadata } from "../hooks/Use-Site-Metadata";

export function SEO(props) {
  const metadata = useSiteMetadata();
  return (
    <>
      <title>{props.title ? `${props.title} | ${metadata.title}` : metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
    </>
  )
}