import React from "react";
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../Utilities/StringUtil";
import "./Styles/Navbar.css";

const Nav = () => {
  const [pathSegments, setPathSegments] = useState(
    window.location.hash.replace(/^#\//, "").split("/")
  );

  useEffect(() => {
    const handleHashChange = () => {
      setPathSegments(window.location.hash.replace(/^#\//, "").split("/"));
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function getNavClassStatus(path) {
    return pathSegments[0] === path.toLowerCase()
      ? "nav-link active"
      : "nav-link";
  }

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={getNavClassStatus("")} aria-current="page" href="/#/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className={getNavClassStatus("algorithms")} href="/#/algorithms">
            Algorithms
          </a>
        </li>
        <li className="nav-item">
          <a className={getNavClassStatus("About")} href="/#/about">
            About
          </a>
        </li>
        <li className="nav-item"></li>
      </ul>{" "}
      <p>
        {pathSegments.map(capitalizeFirstLetter).join(" / ") === ""
          ? "Home"
          : pathSegments.map(capitalizeFirstLetter).join(" / ")}
      </p>
    </>
  );
};

export default Nav;
