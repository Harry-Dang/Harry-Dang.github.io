import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import * as styles from "../styles/navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/Ai";

export default function Navbar(props) {
  const [navShow, setNavShow] = useState(false);

  return (
    <nav 
      className={styles.Navbar}
    >
      { props.isHome ? null : <h1><Link to="/">Harry Dang</Link></h1> }
      <button
        className={styles.Menu}
        onClick={() => setNavShow(!navShow)}
      >
        { navShow ? <AiOutlineClose /> : <AiOutlineMenu /> }
      </button>
      <ul className={navShow ? styles.Show : styles.Hidden}>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li className={styles.Social}><a href="https://github.com/Harry-Dang" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/Logos/GitHub-Mark-Light-120px-plus.png"
            className={styles.Logo}
          />
        </a></li>
        <li className={styles.Social}><a href="https://twitter.com/HarryDang9" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/Logos/2021 Twitter logo - white.png"
            className={styles.Logo}
          />
        </a></li>
        <li className={styles.Social}><a href="https://www.instagram.com/harrydang9/" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/Logos/Instagram_Glyph_White.png"
            className={styles.Logo}
          />
        </a></li>
      </ul>
    </nav>
  )
}