import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/project.module.css";

export default function ProjectDetail(props) {
  const body = props.secret ? (
  <article className={styles.Secret}>
    <p>Work in progress project</p>
    <p>Check back soon</p>
  </article>
  ) : (
    <article className={styles.Project}>
      <GatsbyImage
        className={styles.ImgContainer}
        image={props.project.img.childImageSharp.gatsbyImageData}
        alt={props.project.alt}
      />
      <div className={styles.Details}>
        <h1>{ props.project.title }</h1>
        <p>{ props.project.description }</p>
      </div>
    </article>
  )
  return (
    <div 
      className={styles.ProjectContainer}
      style={props.color ? {backgroundColor: "#DFDFDF"} : null}
    >
      { body }
    </div>
  )
}