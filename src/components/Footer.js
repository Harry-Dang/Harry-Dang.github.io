import { Link } from "gatsby";
import React from "react";
import * as styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Background}>
      <footer className={styles.Footer}>
        <section className={styles.Name}>
          <h1>Harry Dang</h1>
          <p>@harrydang9</p>
          <Link to="/contact">Say hi!</Link>
        </section>
        <section className={styles.Links}>
          <h1>Links</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
          </ul>
        </section>
        <section className={styles.Socials}>
          <h1>Social</h1>
          <ul>
            <li><a href="https://www.instagram.com/harrydang9/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/HarryDang9" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/harry-dang-a3021621a/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Harry-Dang" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://www.behance.net/hadang9993375" target="_blank" rel="noreferrer">Behance</a></li>
          </ul>
        </section>
      </footer>
    </div>
  )
}