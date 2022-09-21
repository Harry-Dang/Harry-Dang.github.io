import React from "react";
import { graphql } from "gatsby";
import GameDetail from "../../components/Game-Detail";
import Layout from "../../components/Layout";
import { SEO } from "../../components/Seo";

export default function NoScrewsAttached(props) {
  const game = props.data.noscrewsattachedJson;
  return (
    <Layout>
      <GameDetail game={game} />
    </Layout>
  )
}

export const query = graphql`
  query NoScrewsAttached {
    noscrewsattachedJson {
      title
      team
      sentence
      paragraph
      banner {
        childImageSharp {
          gatsbyImageData
        }
      }
      screenshots {
        img {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
          id
        }
        alt
      }
      members {
        name
        role
      }
      mainColor
      sidebarColor
    }
  }
`

export function Head() {
  return (
    <SEO title="No Screws Attached" />
  )
}