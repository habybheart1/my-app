import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <a href="App.js">
            <img
              src="../images/logo.jpg"
              alt="Smooth-ventures-logo"
              width="120px"
            />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
                <ul>
                  <li>
                    <a href="#">Batteries</a>
                  </li>
                  <li>
                    <a href="#">Solar Panel</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Body />
      <Footer />
    </div>
  );
}
