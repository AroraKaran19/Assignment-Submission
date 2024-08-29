import React from "react";

const FooterContent = () => {
  return (
    <>
      <div className="logo-box flex-1 flex flex-col justify-center items-center">
        <img src="/TP-logo.webp" alt="" className="w-auto h-auto" />
        <div className="socials flex gap-2 text-lg">
          <span>Follow us on: </span>
          <a href="https://www.facebook.com/tyreplex">
            <i className="fa-brands fa-square-facebook hover:text-blue-500 transition-all duration-300 ease-in-out"></i>
          </a>
          <a href="https://www.instagram.com/ontyreplex">
            <i className="fa-brands fa-instagram-square hover:text-pink-500 transition-all duration-300 ease-in-out"></i>
          </a>
        </div>
      </div>
      <div className="links flex-1 flex flex-col items-center text-center">
        <p className="heading">Company</p>
        <a href="#">Who We Are</a>
        <a href="#">Contact Us</a>
        <a href="#">Our Story</a>
      </div>
      <div className="container-links flex-1 flex flex-col items-center gap-2">
        <div className="links flex flex-col items-center text-center">
          <p className="heading">Partner with us</p>
          <a href="#">Are you a Tyre Dealer?</a>
        </div>
        <div className="links flex flex-col items-center text-center">
          <p className="heading">Career</p>
          <a href="#">Career</a>
        </div>
      </div>
      <div className="links flex-1 flex flex-col items-center text-center">
        <p className="heading">Policies</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of use</a>
        <a href="#">Shipping & Return Policy</a>
      </div>
    </>
  );
};

export default FooterContent;
