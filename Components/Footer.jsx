import React from "react";
import "../Styles/footer.css";

export default function Footer(props) {
  return (
    <footer>
      <a href="#" className="logo">
        {props.logoName}
      </a>
      <p>All Right Reserved by Malik</p>
    </footer>
  );
}
