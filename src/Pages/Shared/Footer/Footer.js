import React from "react";
import footer from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      className="grid-rows-1 p-10  text-center text-black mt-16"
      style={{
        background: `url(${footer})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="footer ">
        <div className="text-center">
          <span className="footer-title">Services</span>
          <a href="" className="link link-hover">
            Branding
          </a>
          <a href="" className="link link-hover">
            Design
          </a>
          <a href="" className="link link-hover">
            Marketing
          </a>
          <a href="" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="" className="link link-hover">
            About us
          </a>
          <a href="" className="link link-hover">
            Contact
          </a>
          <a href="" className="link link-hover">
            Jobs
          </a>
          <a href="" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="" className="link link-hover">
            Terms of use
          </a>
          <a href="" className="link link-hover">
            Privacy policy
          </a>
          <a href="" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </div>
      <p className="mt-16">
        Copyright © {new Date().getFullYear()} - All right reserved by Doctor's
        Portal
      </p>
    </footer>
  );
};

export default Footer;
