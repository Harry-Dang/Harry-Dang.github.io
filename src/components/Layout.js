import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/global.css";

export default function Layout(props) {
  return (
    <div>
      <div 
        style={props.isHome ? null : {
          background: "linear-gradient(197deg, rgba(46,48,70,1) 7%, rgba(53,54,74,1) 39%, rgba(63,63,81,1) 70%, rgba(118,111,117,1) 100%)"
          }}
      >
        <Navbar isHome={props.isHome}/>
        { props.isHome || !props.title ? null : (
          <div className="Title">
            { props.title }
          </div>
        )}
      </div>
      <div>
        { props.children }
      </div>
      <Footer />
    </div>
  )
}