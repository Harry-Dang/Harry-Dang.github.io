import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/gamedetail.module.css";
import Slideshow from "./Slideshow";

export default function GameDetail(props) {
  return (
    <div>
      <header>
        <GatsbyImage
          className={styles.Banner}
          image={props.game.banner.childImageSharp.gatsbyImageData}
        />
      </header>
      <main className={styles.Body}>
        <div>
          <header className={styles.Title}>
            <h1>{props.game.title}</h1>
            <p>{props.game.sentence}</p>
          </header>
          <section className={styles.Description}>
            <p>{props.game.paragraph}</p>
          </section>
          <section 
            className={styles.Screenshots}
            style={{backgroundColor: props.game.mainColor}}
          >
              <Slideshow images={props.game.screenshots} />
          </section>
        </div>
        <aside 
          className={styles.Team}
          style={{backgroundColor: props.game.sidebarColor}}
        >
          <div>
            <h2>{props.game.team}</h2>
            <ul>
              {
                props.game.members.map(member => (
                  <li key={member.name}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}