import React from "react";
import Layout from "../../components/Layout";
import { SEO } from "../../components/Seo";
import * as styles from "../../styles/blog.module.css";

export default function Blog() {
  return (
    <Layout title="Blog">
      <main className={styles.Main}>
        <h1>No posts yet</h1>
        <p>Check back soon!</p>
      </main>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="Blog" />
  )
}