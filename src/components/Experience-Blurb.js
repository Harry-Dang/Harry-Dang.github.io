import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/experienceblurb.module.css";

export default function ExperienceBlurb(props) {
  return (
    <article className={styles.Experience}>
      <h1>{props.exp.company}</h1>
      <div>
        <h2 className={styles.Position}>{props.exp.position}</h2>
        <h2 className={styles.Date}>{props.exp.date}</h2>
      </div>
      <p>{props.exp.description}</p>
      <GatsbyImage
        className={styles.Image}
        image={props.exp.img.childImageSharp.gatsbyImageData}
        alt={props.exp.alt}
      />
    </article>
  )
}