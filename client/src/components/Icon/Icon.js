import React from "react";

function Icon({ href, src, alt, height, ml, mr }) {

  const styles = {
    marginLeft: ml,
    marginRight: mr,
    transform: "scale(2.25)",
    paddingBottom: "5px",
    paddingTop: "5px"
  }
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} height={height} style={styles}/>
    </a>
  );
}

export default Icon;
