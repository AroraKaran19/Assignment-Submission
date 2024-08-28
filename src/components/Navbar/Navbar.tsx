"use client";
import React, { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    {
      index: 1,
      name: "Home",
      url: "/",
    },
    {
      index: 2,
      name: "Car Tyres",
      url: "/car-tyres",
      subMenu: [
        {
          title: "Popular Car Tyre Brands",
          items: [
            {
              index: 1,
              name: "MRF Tyres",
              url: "/car-tyres/mrf-tyres",
            },
            {
              index: 2,
              name: "CEAT Tyres",
              url: "/car-tyres/ceat-tyres",
            },
            {
              index: 3,
              name: "GoodYear Tyres",
              url: "/car-tyres/goodyear-tyres",
            },
            {
              index: 4,
              name: "Apollo Tyres",
              url: "/car-tyres/apollo-tyres",
            },
            {
              index: 5,
              name: "Brdgestone Tyres",
              url: "/car-tyres/bridgestone-tyres",
            },
            {
              index: 6,
              name: "JK Tyres",
              url: "/car-tyres/jk-tyres",
            },
            {
              index: 7,
              name: "Michelin Tyres",
              url: "/car-tyres/michelin-tyres",
            },
            {
              index: 8,
              name: "All Car Tyres",
              url: "/car-tyres/",
            },
          ],
        },
      ],
    },
    {
      index: 3,
      name: "Bike Tyres",
      url: "/bike-tyres",
      subMenu: [
        {
          title: "Popular Bike Tyre Brands",
          items: [
            {
              index: 1,
              name: "MRF Tyres",
              url: "/bike-tyres/mrf-tyres",
            },
            {
              index: 2,
              name: "CEAT Tyres",
              url: "/bike-tyres/ceat-tyres",
            },
            {
              index: 3,
              name: "Apollo Tyres",
              url: "/bike-tyres/apollo-tyres",
            },
            {
              index: 4,
              name: "Brdgestone Tyres",
              url: "/bike-tyres/bridgestone-tyres",
            },
            {
              index: 5,
              name: "JK Tyres",
              url: "/bike-tyres/jk-tyres",
            },
            {
              index: 6,
              name: "Michelin Tyres",
              url: "/bike-tyres/michelin-tyres",
            },
            {
              index: 7,
              name: "Pirelli Tyres",
              url: "/bike-tyres/pirelli-tyres",
            },
            {
              index: 8,
              name: "All Bike Tyres",
              url: "/bike-tyres/",
            },
          ],
        },
      ],
    },
    {
      index: 4,
      name: "Tyre Pressure",
      url: "/tyre-pressure",
    },
    {
      index: 5,
      name: "Commercial Tyres",
      url: "/commercial-tyres",
      subMenu: [
        {
          items: [
            {
              index: 1,
              name: "Commercial Tyres",
              url: "/commercial-tyres",
            },
          ],
        },
      ],
    },
    {
      index: 6,
      name: "Accessories",
      url: "/accessories",
      subMenu: [
        {
          items: [
            {
              index: 1,
              name: "Accessories",
              url: "/accessories",
            },
            {
              index: 2,
              name: "Batteries",
              url: "/accessories/batteries",
            },
            {
              index: 3,
              name: "Alloy Wheels",
              url: "/accessories/alloy-wheels",
            },
          ],
        },
      ],
    },
    {
      index: 7,
      name: "More",
      url: "/more",
      subMenu: [
        {
          items: [
            {
              index: 1,
              name: "Cashback Offers",
              url: "/cashback-offers",
            },
            {
              index: 2,
              name: "Find Tyre Dealers",
              url: "/find-tyre-dealers",
            },
            {
              index: 3,
              name: "Compare Tyres",
              url: "/compare-tyres",
            },
            {
              index: 4,
              name: "Are you a Tyre Dealer?",
              url: "/tyre-dealer",
            },
            {
              index: 5,
              name: "Wheel Balancing",
              url: "/wheel-balancing",
            },
            {
              index: 6,
              name: "Wheel Alignment",
              url: "/wheel-alignment",
            },
          ],
        },
      ],
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const [isSticky, setIsSticky] = useState<boolean>(false);
  let lastScrollY = useRef<number>(0);

  const handleScroll = () => {
    if (window.scrollY > 0 && window.scrollY < lastScrollY.current) {
      setIsSticky(true);
      console.log("scrolling up");
    } else {
      setIsSticky(false);
      console.log("scrolling down");
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`navbar z-[2000] bg-white w-full max-w-screen relative ${
          isSticky ? "sticky" : ""
        }`}
      >
        {/* Mobile Wrapper */}
        <div
          className={`nav-wrapper top-0 left-0 hidden sm:block absolute transition-all duration-500 ease-in-out ${
            menuOpen
              ? "w-full h-screen bg-black/10 backdrop-blur-lg z-[1001]"
              : ""
          }
          }`}
        >
          <div
            className={`menu-container bg-white w-[70vw] hidden sm:block absolute top-0 h-screen z-[1002] ${
              menuOpen && "open"
            } flex flex-col`}
          >
            <div className="menu-header w-full h-16 flex justify-center items-center">
              <img src="/TP-logo.webp" alt="logo" />
            </div>
            <div className="menu-links w-full flex flex-col gap-4 items-start">
              {menu.map((item) => (
                <NavLinks key={item.index} {...item} classValue="menu-link" />
              ))}
            </div>
            <div className="menu-footer w-full h-16 flex justify-center items-center">
              <div className="authentication-btn w-full h-full flex justify-center items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-[25%]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span>Login</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav w-full h-full flex">
          <div className="hamburger-menu flex-none hidden sm:flex justify-center items-center mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`menu-btn h-[50%] hover:cursor-pointer ${
                menuOpen && "z-[1003]"
              }`}
              onClick={() => toggleMenu()}
            >
              {!menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5 M3.75 12h16.5 m-16.5 5.25h16.5"
                />
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6 M6 6l12 12"
                    className={`cross ${!menuOpen && "close"}`}
                  />
                </>
              )}
            </svg>
          </div>
          <div className="logo-box flex-1 flex justify-center items-center sm:justify-start px-[0.8rem] sm:px-1">
            <img
              src="/TP-logo.webp"
              alt="logo"
              className="min-h-9 min-w-auto min-w-36"
            />
          </div>
          <div className="nav-links flex-none sm:hidden flex justify-center items-center gap-4 flex-wrap shrink">
            {menu.map((item) => (
              <NavLinks key={item.index} {...item} />
            ))}
          </div>
          <div className="authentication-box flex-1 sm:flex-none flex justify-center items-center sm:justify-end px-[0.8rem] sm:px-2">
            <div className="authentication-btn w-full h-full flex justify-center items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-[25%] sm:h-[50%] sm:w-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  className="sm:hidden"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  className="hidden sm:block"
                />
              </svg>
              <span className="sm:hidden">Login</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
