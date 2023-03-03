import React from "react";
import "../Styles/header.css";

export default function Header() {
  return (
    <nav>
      <a href="#" className="logo">
        Logo.
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
