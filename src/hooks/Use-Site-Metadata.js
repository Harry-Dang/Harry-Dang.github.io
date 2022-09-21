import { graphql, useStaticQuery } from "gatsby";

export function useSiteMetadata() {
  const data = useStaticQuery(
    graphql`
      query Meta {
        site {
          siteMetadata {
            title
            description
            image
            twitterUsername
            author
          }
        }
      }
    `
  )

  return data.site.siteMetadata;
}