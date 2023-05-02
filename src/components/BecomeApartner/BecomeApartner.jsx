"use client";
import React, { useEffect, useState } from "react";
import Container from "../utils/Container/Container";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { Button } from "antd";

const BecomeApartner = () => {
  const [businessTitle, setBusinessTitle] = useState();
  const [businessDesc, setBusinessDesc] = useState();
  const [businessCategories, setBusinessCategories] = useState();
  const [businessFeatures, setBusinessFeatures] = useState();
  const [businessServices, setBusinessServices] = useState();
  const [businessOpenDates, setBusinessOpenDates] = useState();
  const [businessAddress, setBusinessAddress] = useState();
  const [businessState, setBusinessState] = useState();
  const [businessPincode, setBusinessPincode] = useState();
  const [pricePerDay, setPricePerDay] = useState();
  const [pricePerMonth, setPricePerYear] = useState();
  const [contactFirstName, setContactFirstName] = useState();
  const [contactLastName, setContactLastName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactNumber, setContactNumber] = useState();

  const businessCategoryOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-6 w-full my-6">
          <div className="flex flex-col gap-6 w-full md:w-8/12">
            <div className="border border-slate-200 rounded-md p-2">
              <label className="space-y-2">
                <p>Business name (required)</p>
                <input type="text" placeholder="Business name..." />
              </label>
            </div>
            <div className="border border-slate-200 rounded-md p-2">
              <label className="space-y-2">
                <p>Business Description (required)</p>
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Business Description..."
                ></textarea>
              </label>
            </div>
            <div className="border flex flex-col md:flex-row justify-between w-full gap-4 border-slate-200 rounded-md p-2">
              <div className="w-full md:w-6/12">
                <label className="space-y-2">
                  <p>Business Categories (required)</p>
                  <CreatableSelect isMulti options={businessCategoryOptions} />
                </label>
              </div>
              <div className="w-full md:w-6/12">
                <label className="space-y-2">
                  <p>Features/Amenities (required)</p>
                  <CreatableSelect isMulti options={businessCategoryOptions} />
                </label>
              </div>
            </div>
            <div className="border flex flex-col md:flex-row justify-between w-full gap-4 border-slate-200 rounded-md p-2">
              <div className="w-full md:w-6/12">
                <label className="space-y-2">
                  <p>Services (required)</p>
                  <CreatableSelect isMulti options={businessCategoryOptions} />
                </label>
              </div>
              <div className="w-full md:w-6/12">
                <label className="space-y-2">
                  <p>Open Dates (required)</p>
                  <Select isMulti options={businessCategoryOptions} />
                </label>
              </div>
            </div>
            <div className="border flex flex-wrap gap-y-4 border-slate-200 rounded-md p-2">
              <div className="w-full">
                <label className="space-y-2">
                  <p>Business Address (required)</p>
                  <input type="text" placeholder="Business Address..." />
                </label>
              </div>
              <div className="w-full md:w-6/12 md:pr-2">
                <label className="space-y-2">
                  <p>State (required)</p>
                  <Select options={businessCategoryOptions} />
                </label>
              </div>
              <div className="w-full md:w-6/12 md:pr-2">
                <label className="space-y-2">
                  <p>Pincode (required)</p>
                  <input type="number" placeholder="Pincode" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full md:w-4/12">
            <div className="border flex flex-col justify-between w-full gap-4 border-slate-200 rounded-md p-2">
              <div className="w-full">
                <label className="space-y-2">
                  <p>Price/day (required)</p>
                  <input type="number" placeholder="Amount in rs." />
                </label>
              </div>
              <div className="w-full">
                <label className="space-y-2">
                  <p>Price/Month (required)</p>
                  <input type="number" placeholder="Amount in rs." />
                </label>
              </div>
              <div className="w-full">
                <label className="space-y-2">
                  <p>Price/Year (required)</p>
                  <input type="number" placeholder="Amount in rs." />
                </label>
              </div>
            </div>
            <div className="border flex flex-col justify-between w-full gap-4 border-slate-200 rounded-md p-2">
              <div className="flex gap-2">
                <div className="w-full">
                  <label className="space-y-2">
                    <p>First Name (required)</p>
                    <input type="text" placeholder="Name" />
                  </label>
                </div>
                <div className="w-full">
                  <label className="space-y-2">
                    <p>last Name (required)</p>
                    <input type="text" placeholder="Surname" />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <label className="space-y-2">
                  <p>Contact Email (required)</p>
                  <input type="email" placeholder="your email..." />
                </label>
              </div>
              <div className="w-full">
                <label className="space-y-2">
                  <p>Contact Number (required)</p>
                  <input type="tel" placeholder="Contact no." />
                </label>
              </div>
            </div>
            <Button
              className="bg-amber-300 hover:!bg-amber-400 text-purple-900 hover:!text-purple-950"
              type="primary"
              size="large"
            >
              Submit For review
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BecomeApartner;
