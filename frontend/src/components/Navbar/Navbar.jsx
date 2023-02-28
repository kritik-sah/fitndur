"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <Image src={"/assets/icons/fitndure-logo.png"} height={40} width={40} />
        Fitndur
      </div>
      <div className="flex items-center gap-4 justify-end">
        <div className="menu-wrapper">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Vision</li>
          </ul>
        </div>
        <div className="cta-wrapper">
          <button>
            Signin <HiOutlineUserCircle className="h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
