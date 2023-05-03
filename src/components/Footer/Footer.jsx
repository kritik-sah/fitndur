"use client";
// import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiBolt } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-100 via-[#f6ea98] to-amber-100">
      <div className="max-w-screen-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/assets/icons/fitndure-logo.png"
              width="40"
              height="40"
              alt="fitndur"
            />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Fitndur is a digital platform which helps you to find ideal nearby
              gyms,Pools, health clubs for you, which you can use and pay only
              for those days where you hit the ground :p
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                className="hover:opacity-75"
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  About{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  History{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  1on1 Coaching{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Diet Planning{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Learn Yoga{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Learn Swimming{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Learn Kalaripayattu(Martial Arts){" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Learn Dancing{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  FAQs{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Become a partner{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Terms &amp; Conditions{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href="#">
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="flex gap-2 items-center mt-8 text-xs text-gray-800">
          © 2023 Fitndur <HiBolt /> by IT Rebels
        </p>
      </div>
    </footer>
  );
};

export default Footer;
