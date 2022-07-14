import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkObj = links.map(linkObj => <a key={linkObj} href={`#${linkObj}`}>{linkObj}</a>)

  return <nav>{linkObj}</nav>;
}

export default NavBar;
