import { Link } from "gatsby";
import React from "react";
import * as styles from "../styles/contactbutton.module.css";

export default function ContactButton() {
  return (
    <Link to="/contact" className={styles.Button}>Say hi!</Link>
  )
}