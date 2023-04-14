import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Online shopping stores offer a vast selection of electronics,
            including Smartwatches, Bluetooth Speaker and Wireless Earbuds.
            shopping for electronics online is convenient and cost-effective.
            Additionally, online retailers often offer warranties and customer
            service to ensure a positive shopping experience.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Mathura Rd, Faridabad, Haryana, Delhi, 12006
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 96******30</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: OnlineShopping@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watch</span>
          <span className="text">Blutooth Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectros</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watch</span>
          <span className="text">Blutooth Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectros</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            OnlineShopping store 2023 CREATED BY SONU KUMAR❤️.PREMIUM E-COMMERCE
            SOLUTIONS.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
