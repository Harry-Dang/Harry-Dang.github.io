import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import ImageFocus from "../../components/Image-Focus";
import Layout from "../../components/Layout";
import ScrollToTop from "../../components/Scroll-To-Top";
import { SEO } from "../../components/Seo";
import * as styles from "../../styles/photos.module.css";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Photos(props) {
  const photoData = props.data.allFile.edges; // get photo data
  const [allPhotos, setAllPhotos] = useState(() => shuffleArray(photoData)); // shuffle photos
  const [photos, setPhotos] = useState(allPhotos.slice(0, 15)); // load only the first portion

  const [focusedImage, setFocusImage] = useState(""); // set the focused image

  function focusImage(photo) {
    setFocusImage(photo.node.publicURL);
  }

  function loadMore() {
    setPhotos([...photos, ...allPhotos.slice(photos.length, photos.length + 20)]);
  }

  // grid layout based on
  // https://css-tricks.com/adaptive-photo-layout-with-flexbox/
  return (
    <div>
      {
        // overlay image when clicked
        focusedImage ? 
          <ImageFocus
            src={focusedImage}
            back={
              () => {setFocusImage("");}} /> 
          : null
      }
      <ScrollToTop />
      <Layout title="Photos">
        <header className={styles.Header}>
          <h1>See more here</h1>
          <ul>
            <li><a href="https://www.instagram.com/harrydang9/" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../images/Logos/Instagram_Glyph_Black.png"
                className={styles.Logos}
              />
            </a></li>
            <li><a href="https://www.behance.net/hadang9993375" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../images/Logos/BehanceLogo.png"
                className={styles.Logos}
              />
            </a></li>
            <li><a href="https://www.flickr.com/photos/112239122@N04/albums" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../images/Logos/FlickrLogo.png"
                className={styles.Logos}
              />
            </a></li>
          </ul>
        </header>
        <main>
          <ul className={styles.Photos}>
            {
              photos.map((photo) => 
                <li key={photo.node.id}>
                  <img
                    src={photo.node.publicURL}
                    alt=""
                    loading="lazy"
                    onClick={() => focusImage(photo)}
                    onKeyPress={() => focusImage(photo)}
                  />
                </li>
              )
            }
            <li>
          {
            photos.length < allPhotos.length ? (
              <div className={styles.LoadMoreContainer}>
                <button onClick={loadMore}>Load More</button>
              </div>
            ) :
            null
          }</li>
          </ul>
        </main>
      </Layout>
    </div>
  )

  // return (
  //   <Layout title="Photos">
  //     <header className={styles.Header}>
  //       <h1>See more here</h1>
  //       <ul>
  //         <li><Link to="/">Instagram</Link></li>
  //         <li><Link to="/">Behance</Link></li>
  //         <li><Link to="/">Flickr</Link></li>
  //       </ul>
  //     </header>
  //     <main className={styles.Photos}>
  //       {
  //         photos.map((photo) => (
  //           <GatsbyImage 
  //             className={styles.Container}
  //             imgClassName={styles.Image}
  //             image={photo.node.childImageSharp.gatsbyImageData}
  //             style={{
  //               height: "40vh",
  //               width: `calc(
  //                 40vh * ${photo.node.childImageSharp.gatsbyImageData.width} 
  //                 / ${photo.node.childImageSharp.gatsbyImageData.height}
  //                 )`}}
  //             key={photo.node.id}
  //           />
  //         ))
  //       }
  //     </main>
  //   </Layout>
  // )
}

export const query = graphql`
  query Photos {
    allFile(filter: {relativeDirectory: {eq: "Photos"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FIXED, formats: NO_CHANGE, placeholder: BLURRED)
          }
          id
          publicURL
          relativePath
        }
      }
    }
  }
`

export function Head() {
  return (
    <SEO title="Photos" />
  )
}