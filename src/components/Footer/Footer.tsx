"use client";
import React, { useState } from "react";

const Footer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <div className="footer mt-16 w-full min-h-16 bg-white">
        <div className="footer-ask-question flex w-full bg-yellow-200 sm:flex-col sm:gap-5">
          <div className="question-text flex justify-end items-center w-full sm:items-center">
            <div className="questions-container w-fit h-full flex flex-col justify-center items-center sm:w-full">
              <p className="heading sm:text-center">
                Have a question about Tyres?
              </p>
              <p className="sub-heading sm:text-center">
                Get an answer in 24 hours from our experts.
              </p>
              {!formSubmitted ? (
                <div className="question-text-box">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Ask your question here"
                      className="question-text-input px-5 pr-7 py-2 rounded-2xl text-center w-full"
                      onChange={(e) => setValue(e.target.value)}
                    />
                    {value.length > 0 && (
                      <div
                        className="submit-btn absolute bg-green-300 top-0 right-0 h-full flex items-center justify-center rounded-tr-2xl rounded-br-2xl transition-all duration-500 ease-in-out"
                        onClick={() => setFormSubmitted(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                <div className="question-text-submitted">
                  <p>
                    Thank you for asking question, we will review and provide
                    you an expert answer.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="confused-person h-full w-full flex justify-start items-center sm:justify-center">
            <img src="/confused.png" alt="" className="w-auto h-auto" />
          </div>
        </div>
        <div className="footer-content flex gap-10 sm:flex-col w-full">
          <div className="logo-box flex-none flex flex-col justify-center items-center max-w-[500px]">
            <img src="/TP-logo.webp" alt="" className="w-auto h-auto" />
            <div className="socials flex gap-2 text-lg">
              <a href="https://www.facebook.com/tyreplex">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.instagram.com/ontyreplex">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </div>
          </div>
          <div className="links flex-1 flex sm:flex-col w-full gap-20 sm:gap-6">
            <div className="company-links flex-1 flex flex-col justify-center items-center">
              <p className="heading">Company</p>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div className="company-links flex-1 flex flex-col justify-center items-center">
              <p className="heading">Company</p>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div className="company-links flex-1 flex flex-col justify-center items-center">
              <p className="heading">Company</p>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
