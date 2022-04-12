import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contactLayout" id="CONTACT">
      <div className="custom-shape-divider-top-1639237886">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="contactText">
        <h2>CONTACT</h2>
        <p>e-mail : wh301@chosun.com</p>
        <p>gitHub🔗</p>
        <address>&copy;2021. Hyemi Jang. All rights reserved.</address>
        <p style={{ fontSize: 10 }}>마지막 업데이트 2022.04.11</p>
      </div>
    </div>
  );
}

export default Contact;
