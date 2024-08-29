"use client";
import React, { useState } from "react";

const QuestionSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <div className="question-text flex justify-end items-center w-full sm:items-center">
        <div className="questions-container w-fit h-full flex flex-col justify-center items-center sm:w-full">
          <p className="heading sm:text-center">Have a question about Tyres?</p>
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
                  className="question-text-input pl-5 pr-7 py-2 rounded-2xl text-center w-full"
                  onChange={(e) => setValue(e.target.value)}
                />
                {value.length > 0 && (
                  <div
                    className="submit-btn absolute bg-green-300 hover:bg-green-500 top-0 right-0 h-full flex items-center justify-center rounded-tr-2xl rounded-br-2xl transition-all duration-500 ease-in-out"
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
            <div className="question-text-submitted break-words flex flex-wrap">
              <p>
                Thank you for asking question, we will review and provide you an
                expert answer.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="confused-person h-full w-full flex justify-start items-center sm:justify-center">
        <img
          src="/confused.png"
          alt=""
          className="w-auto h-auto"
          draggable={false}
        />
      </div>
    </>
  );
};

export default QuestionSection;
