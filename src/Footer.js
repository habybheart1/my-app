import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <h3>Footer Menu</h3>
      <div>
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
      </div>
      <div>
        <address>
          <p>Oshodi, Lagos State</p>
          <p>
            <a href="mailto:smoothrecyclingventures@gmail.com">
              smoothrecyclingventures@gmail.com
            </a>
            <a href="tel:08117175084">08117175084</a>
          </p>
        </address>
      </div>
    </div>
  );
}
