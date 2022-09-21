import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import ProjectDetail from "../../components/Project-Detail";
import { SEO } from "../../components/Seo";

export default function Projects(props) {
  const projects = props.data.allProjectJson.edges;
  return (
    <Layout title="Projects">
      <ProjectDetail secret color/>
      {
        projects.map((project, index) => <ProjectDetail project={project.node} color={index % 2}key={project.node.id}/>)
      }
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    allProjectJson {
      edges {
        node {
          description
          id
          title
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          alt
        }
      }
    }
  }
`

export function Head() {
  return (
    <SEO title="Projects" />
  )
}