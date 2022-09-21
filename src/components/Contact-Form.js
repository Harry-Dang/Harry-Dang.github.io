import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import * as styles from "../styles/contactform.module.css";

// https://help.formspree.io/hc/en-us/articles/360062302854-Special-Fields

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkneoaea");
  if (state.succeeded) {
      return (
      <main className={styles.Success}>
        <h1>Message recieved!</h1>
        <p>I'll get in touch with you within a day or two</p>
      </main>
      );
  }
  return (
    <main className={styles.FormContainer}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="YourEmail@example.com"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="name">
          Name
        </label>
        <input
          name="name"
          placeholder="Jane Smith"
        />
        <label htmlFor="subject">
          Subject
        </label>
        <input
          name="subject"
          placeholder="Subject"
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </main>
  );
}