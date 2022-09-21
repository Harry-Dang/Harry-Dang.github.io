import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";
import * as styles from "../styles/404.module.css";

export default function Error404() {
  return (
    <Layout>
      <main className={styles.Body}>
        <h1>Error 404</h1>
        <p>Page not found</p>
      </main>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="404" />
  )
}