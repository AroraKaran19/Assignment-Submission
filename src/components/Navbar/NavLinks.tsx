"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  index: number;
  name: string;
  url: string;
  classValue?: string;
  subMenu?: SubMenuValue[];
}

interface SubMenuValue {
  title?: string;
  items: SubMenuProps[];
}

interface SubMenuProps {
  index: number;
  name: string;
  url: string;
  classValue?: string;
}

const NavLinks = ({ index, name, url, classValue, subMenu }: NavLinksProps) => {
  const currentPath = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleNavClick = () => {
    if (url === currentPath) return;
    if (subMenu) {
      setSubMenuOpen(!subMenuOpen);
    }
  };

  return (
    <Link
      href={subMenu ? "" : url}
      tabIndex={index}
      onClick={() => handleNavClick()}
      onMouseEnter={() => setSubMenuOpen(true)}
      onMouseLeave={() => setSubMenuOpen(false)}
      className={`navigation-link relative ${
        (currentPath === url || "/" + currentPath.split("/")[1] === url) &&
        "text-red-500"
      } ${classValue}`}
    >
      <div className="nav-link-name text-center w-full flex justify-center sm:justify-start items-center gap-0.5 h-6">
        <span className="flex flex-wrap">{name}</span>
        {subMenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-[70%] flex items-center transition-all duration-300 ease-in-out ${
              subMenuOpen && "-rotate-[180deg]"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      {subMenu &&
        Object.keys(subMenu).map((key: any) => (
          <div
            key={key}
            className={`sub-menu absolute sm:relative sm:left-0 sm:mobile top-full w-max bg-white cursor-default text-black justify-center items-center left-1/2 break-words ${
              subMenuOpen ? "flex flex-col" : "hidden"
            }`}
          >
            {subMenu[key].title && (
              <div className="sub-menu-title mb-2 underline flex flex-wrap text-center sm:hidden">
                {subMenu[key].title}
              </div>
            )}
            <div className="sub-menu-links flex flex-col gap-1 w-full">
              {subMenu[key].items.map((item, index) => (
                <NavLinks key={index} {...item} classValue="sub-menu-item" />
              ))}
            </div>
          </div>
        ))}
    </Link>
  );
};

export default NavLinks;
