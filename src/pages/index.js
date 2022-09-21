import React from "react"
import * as styles from "../styles/home.module.css";
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout"
import ExperienceBlurb from "../components/Experience-Blurb";
import { SEO } from "../components/Seo";

export default function Home(props) {
  const experiences = props.data.allExperienceJson.edges;
  return (
    <div>
      <StaticImage
        className={styles.Background}
        imgClassName={styles.BGImage}
        src="../images/LouisvilleSunset.jpg"
        alt="Photograph of the sky and river during sunset"
      />
      <Layout isHome>
        <main className={styles.Intro}>
          <h1>Harry Dang</h1>
          <div className={styles.About}>
            <p>I recently graduated from Cornell University with a degree in Computer Science and two minors in Information Science and Game Design.</p>
            <p>I am a programmer with a passion in creating games, full stack websites, and mobile apps. I've developed two games with two wonderful teams.</p>
            <p>I am a photographer with a love for capturing moments in time. I was the staff photographer for the Cornell Daily Sun. In addition, I photograph various different automotive and motorsports events. </p>
          </div>
          <Link to="/contact" className={styles.Contact}>Say hi!</Link>
        </main>
        <section className={styles.Experience}>
          <h1>Experience</h1>
          <div>
            {
              experiences.map((exp) => 
                <ExperienceBlurb 
                  exp={exp.node} 
                  key={exp.node.id}
                />)
            }
          </div>
        </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ExperienceBlurb {
    allExperienceJson {
      edges {
        node {
          alt
          company
          date
          description
          id
          position
          img {
            childImageSharp {
              gatsbyImageData(formats: AUTO, layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export function Head() {
  return (
    <SEO />
  )
}
