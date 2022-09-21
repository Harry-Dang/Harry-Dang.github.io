import React from "react";
import { AiOutlineClose } from "react-icons/Ai";
import * as styles from "../styles/imagefocus.module.css";

export default function ImageFocus(props) {
  return (
    <div className={styles.Background}>
      <button className={styles.Button} onClick={props.back}>
        <AiOutlineClose />
      </button>
      <img src={props.src} alt={props.alt} onClick={props.back}></img>
    </div>
  )
}