import React, { useState, useEffect } from "react";
import { AiOutlineUp } from "react-icons/Ai";
import * as styles from "../styles/scrolltotop.module.css";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            setShowButton(true);
        } else {
          setShowButton(false);
        }
    });
  }, []);

  return (
    <button className={showButton ? styles.ButtonShow : styles.ButtonHide} onClick={
      () => window.scrollTo({top: 0, behavior: "smooth"})
    }>
      <AiOutlineUp />
    </button>
  )
}