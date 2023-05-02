"use client";
import useAuthModal from "@/app/hooks/useAuthModal";
import { Dropdown } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  HiOutlineMap,
  HiOutlineFire,
  HiOutlineHeart,
  HiOutlineHomeModern,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { signOut } from "next-auth/react";

const Menu = ({ user }) => {
  const authModal = useAuthModal();
  const authMenu = [
    {
      key: "1",
      label: (
        <span className="w-[100px] block" onClick={() => {}}>
          Profile
        </span>
      ),
    },
    {
      key: "1",
      label: (
        <span className="w-[100px] block" onClick={() => signOut()}>
          Logout
        </span>
      ),
    },
  ];
  const unAuthMenu = [
    {
      key: "1",
      label: (
        <span
          className="w-[100px] block"
          onClick={() => {
            authModal.onOpen();
            authModal.goLogin();
          }}
        >
          Login
        </span>
      ),
    },
    {
      key: "1",
      label: (
        <span
          className="w-[100px] block"
          onClick={() => {
            authModal.onOpen();
            authModal.goRegister();
          }}
        >
          Signup
        </span>
      ),
    },
  ];
  const [items, setItems] = useState(unAuthMenu);
  useEffect(() => {
    if (user) {
      setItems(authMenu);
    } else {
      setItems(unAuthMenu);
    }
  }, [user]);

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
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <span className="navitem">
          <HiOutlineUserCircle className="text-3xl" />
        </span>
      </Dropdown>
    </nav>
  );
};

export default Menu;
