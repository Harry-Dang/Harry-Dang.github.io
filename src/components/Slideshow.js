import React, {useEffect, useState} from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/slideshow.module.css"

const DELAY = 5000;

export default function Slideshow(props) {
  const [mainPic, setMainPic] = useState(0);
  
  useEffect(
    () => {
      const timer = setTimeout(() => {
        setMainPic((index) => (index + 1) % props.images.length);
      }, DELAY)
      return () => {
        clearTimeout(timer);
      };
    }, [mainPic]
  )

  useEffect(
    () => {
      document.getElementById("carousel").scrollTo(
        {
          left: document.getElementById(props.images[mainPic].img.id).scrollHeight * mainPic,
          top: 0,
          behavior: "smooth"
        }
      ) 
    }, [mainPic]
  )
  
  return (
    <section className={styles.Slideshow}>
      <GatsbyImage
        image={props.images[mainPic].img.childImageSharp.gatsbyImageData}
        alt={props.images[mainPic].alt}
        className={styles.MainContainer}
        imgStyle={{objectFit: "scale-down"}}
      />
      <div className={styles.CarouselContainer}>
      <ul className={styles.Carousel} id="carousel">
          {
            props.images.map((screenshot, index) => {
              return (
                <li 
                  key={screenshot.img.id}
                  id={screenshot.img.id}
                  onClick={() => setMainPic(index)}
                >
                  <GatsbyImage
                    image={screenshot.img.childImageSharp.gatsbyImageData}
                    alt={screenshot.alt}
                    className={index === mainPic ? styles.ContainerHighlight : styles.Container}
                    imgStyle={{objectFit: "scale-down"}}
                  />
                </li>
              )
            })
          }
      </ul>
      </div>
    </section>
  )
}