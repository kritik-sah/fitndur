"use client";
import Link from "next/link";
import React from "react";
import {
  HiOutlineMap,
  HiOutlineFire,
  HiOutlineHeart,
  HiOutlineHomeModern,
} from "react-icons/hi2";

const Menu = () => {
  return (
    <nav className="flex item-center justify-end gap-1 md:gap-4 text-2xl md:text-lg">
      <Link href="/">
        <span className="navitem">
          <HiOutlineMap className="text-2xl" />{" "}
          <span className="hidden md:block">Discover</span>
        </span>
      </Link>
      <Link href="/">
        <span className="navitem">
          <HiOutlineFire className="text-2xl" />{" "}
          <span className="hidden md:block">Hot</span>
        </span>
      </Link>
      <Link href="/partnership">
        <span className="navitem cta">
          <HiOutlineHomeModern className="text-2xl" />{" "}
          <span className="hidden md:block">Become a partner</span>
        </span>
      </Link>
      {/* <span className="navitem">
        <HiOutlineHeart className="text-2xl"/> <span className="hidden md:block">Favorite</span>
      </span> */}
    </nav>
  );
};

export default Menu;
