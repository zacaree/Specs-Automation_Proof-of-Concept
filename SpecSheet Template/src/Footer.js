import React from "react";
import DeviceImg from "./img/Device";

const Footer = props => {
  return (
    <>
      <footer>
        <div className="ctr-cta">
          <DeviceImg />
          <div>
            <h4>Visit hustlerturf.com</h4>
            <p>and try our compare mowers tool!</p>
          </div>
        </div>
      </footer>

      <div className="atAGlance">
        <div className="ctr-top">
          <h3>{props.product.productName} | At a glance</h3>
        </div>
        <div className="ctr-bottom">
          <ul>
            <li>36”, 48”, 52” or 60” welded steel side-discharge decks</li>
            <li>Kawasaki and Kohler engine options available</li>
            <li>1.5” to 5.5” deck heights (1/4” increments)</li>
            <li>8 or 9 mph speed options (depending on deck size)</li>
            <li>6.5 or 7.3 gallon fuel capacity (depending on deck size)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
