import Image from "next/image";
import React from "react";
import Container from "../utils/Container/Container";
import Hamburger from "./hamburger/Hamburger";
import Menu from "./Menu";
import AuthModal from "../Auth/AuthModal";

const Navbar = () => {
  return (
    <header className="navbar">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center py-4">
            <Image
              src="/assets/icons/fitndure-logo.png"
              alt="F"
              width="40"
              height="40"
            />
            <span className="text-3xl font-semibold font-primary hidden md:inline-block">
              ITNDUR
            </span>
          </div>
          <div className="flex item-center justify-end gap-1 md:gap-4">
            <Menu />
            <Hamburger />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
