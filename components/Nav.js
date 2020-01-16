import React from "react";

const Nav = ({ links = { "/": "Home" } }) => (
  <nav>
    {Object.keys(links).map(key => (
      <a key={key} href={key}>
        {links[key]}
      </a>
    ))}
  </nav>
);

export default Nav;
