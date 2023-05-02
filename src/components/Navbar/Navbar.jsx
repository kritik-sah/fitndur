"use client";
import Image from "next/image";
import React from "react";
import Container from "../utils/Container/Container";
import Hamburger from "./hamburger/Hamburger";
import Menu from "./Menu";
import { useRouter } from "next/navigation";

const Navbar = ({ user }) => {
  const router = useRouter();
  return (
    <header className="navbar">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div
            onClick={() => router.push("/")}
            className="flex items-center py-4"
          >
            <Image
              src="/assets/icons/fitndure-logo.png"
              alt="F"
              width="40"
              height="40"
            />
            <span className="relative font-sans text-3xl font-bold tracking-tight px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-theme-secondary" />
              <span className="relative inline-block text-theme-primary">
                fitndur
              </span>
            </span>
          </div>
          <div className="flex item-center justify-end gap-1 md:gap-4">
            <Menu user={user} />
            <Hamburger />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
