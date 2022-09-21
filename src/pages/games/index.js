import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/games.module.css"
import { SEO } from "../../components/Seo";

export default function Games() {
  return (
    <Layout title="Games">
      <nav className={styles.Nav}>
        <Link className={styles.Game} to="/games/changeincharge">
          <div className={styles.Title}>Change in Charge</div>
          <StaticImage 
            className={styles.Banner}
            src="../../images/ChangeInChargeBanner.png" 
            styles={ {backgroundColor: "#705954"} }  
          />
        </Link>
        <Link className={styles.Game} to="/games/noscrewsattached">
          <div className={styles.Title}>No Screws Attached</div>
          <StaticImage
            className={styles.Banner}
            src="../../images/NoScrewsAttachedBanner.png"
          />
        </Link>
      </nav>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="Games" />
  )
}