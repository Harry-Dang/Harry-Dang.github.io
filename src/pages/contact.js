import React from "react";
import ContactForm from "../components/Contact-Form";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";

export default function Contact() {
  return (
    <Layout title="Contact">
      <ContactForm />
    </Layout>
  )
}

export function Head() {
  return (
    <SEO title="Contact" />
  )
}