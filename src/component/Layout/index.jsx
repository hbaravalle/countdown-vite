import React from "react";
import logo from "/img/logo.svg";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <h1>
          <img src={logo} alt="Logo countdown.gif" />
        </h1>
      </header>
      <main>{children}</main>
      <footer>timer.gif © Chango Fanko, 2021. Powered by Giphy</footer>
    </div>
  );
}
