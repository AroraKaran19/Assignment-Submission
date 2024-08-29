import React from "react";
import QuestionSection from "./QuestionSection";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <>
      <div className="footer-down relative w-full h-full">
        <div className="footer mt-16 w-full min-h-16 bg-white absolute top-full">
          <div className="footer-ask-question flex w-full bg-yellow-200 sm:flex-col sm:gap-5 sm:py-5">
            <QuestionSection />
          </div>
          <div className="footer-content flex gap-10 sm:flex-col w-full">
            <FooterContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
