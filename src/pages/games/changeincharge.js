import { graphql } from "gatsby";
import React from "react";
import GameDetail from "../../components/Game-Detail";
import Layout from "../../components/Layout";
import { SEO } from "../../components/Seo";

export default function ChangeInCharge(props) {
  const game = props.data.changeinchargeJson;
  return (
    <Layout>
      <GameDetail game={game} />
    </Layout>
  )
}

export const query = graphql`
  query ChangeInCharge {
    changeinchargeJson {
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
    <SEO title="Change in Charge" />
  )
}