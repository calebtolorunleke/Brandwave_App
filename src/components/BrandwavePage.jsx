import React from "react";
import logo from "../assets/brandwave.jpg";
import { CgProfile } from "react-icons/cg";
import { MdFilterListOff, MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiAlarmWarningFill } from "react-icons/ri";
import onco1 from "../images/onco1.jpg";
import onco2 from "../images/onco2.jpg";
import big1 from "../images/big1.png";
import big2 from "../images/big2.png";
import big3 from "../images/big3.png";
import big4 from "../images/big4.png";
import big5 from "../images/big5.png";
import big6 from "../images/big6.png";
import big7 from "../images/big7.png";
import big8 from "../images/big8.png";
import big9 from "../images/big9.png";
import big10 from "../images/big10.png";
import big11 from "../images/big11.png";
import big12 from "../images/big12.png";
import smimg1 from "../images/small1.png";
import smimg2 from "../images/small2.png";
import smimg3 from "../images/small3.png";
import smimg4 from "../images/small4.png";
import smimg5 from "../images/small5.png";
import smimg6 from "../images/small6.png";
import smimg7 from "../images/small7.png";
import smimg8 from "../images/small8.png";
import smimg9 from "../images/small9.png";
import smimg10 from "../images/small10.png";
import smimg11 from "../images/small11.png";
import smimg12 from "../images/small11.png";

const BrandwavePage = () => {
  const trendingBrands = [
    {
      name: "Autosaav",
      category: "Automobile",
      location: "Zaria",
      testimonials: 20,
      img: big1,
      smimg: smimg1,
    },
    {
      name: "Seed Farm",
      category: "Agriculture",
      location: "Sokoto",
      testimonials: 20,
      img: big2,
      smimg: smimg2,
    },
    {
      name: "Luxesun",
      category: "Fashion Design",
      location: "Abuja, Gwagwalada",
      testimonials: 70,
      img: big3,
      smimg: smimg3,
    },
  ];

  const industries = {
    Agriculture: [
      {
        name: "Heras",
        location: "Anambara, Onitsha",
        testimonials: 70,
        img: big4,
        smimg: smimg4,
      },
      {
        name: "Fieldking",
        location: "Benue",
        testimonials: 100,
        img: big5,
        smimg: smimg5,
      },
      {
        name: "Seed Farm",
        location: "Sokoto",
        testimonials: 20,
        img: big6,
        smimg: smimg6,
      },
    ],
    "Fashion Design": [
      {
        name: "Luxesun",
        location: "Abuja, Gwagwalada",
        testimonials: 70,
        img: big7,
        smimg: smimg7,
      },
      {
        name: "Shaka",
        location: "Lagos",
        testimonials: 100,
        img: big8,
        smimg: smimg8,
      },
      {
        name: "Krestic Design",
        location: "Abia, Aba",
        testimonials: 20,
        img: big9,
        smimg: smimg9,
      },
    ],
    Automobile: [
      {
        name: "Fennec",
        location: "Abuja, Gwagwalada",
        testimonials: 70,
        img: big10,
        smimg: smimg10,
      },
      {
        name: "Cardrip",
        location: "Lagos, Yaba",
        testimonials: 100,
        img: big11,
        smimg: smimg11,
      },
      {
        name: "Autosaav",
        location: "Zaria",
        testimonials: 20,
        img: big12,
        smimg: smimg12,
      },
    ],
  };

  const renderCard = ({
    name,
    category,
    location,
    testimonials,
    img,
    smimg,
  }) => (
    <div
      key={name}
      className="bg-gray-100 shadow p-4 w-[260px] flex flex-col items-center "
    >
      <div className="relative flex flex-col items-center">
        <img src={img} alt={name} className="w-full h-32 object-cover" />
        <img
          src={smimg}
          alt={name}
          className="w-10 h-10 rounded-full absolute -bottom-5 left-1/2 transform -translate-x-1/2 border-2 border-white"
        />
      </div>

      <h4 className="mt-2 text-lg font-semibold pt-2 ">{name}</h4>
      {category && <p className="text-sm text-gray-600">{category}</p>}
      <p className="text-sm text-gray-600">{location}</p>
      <div className="flex flex-col text-center">
        <p className="text-sm text-blue-400 font-medium">
          {testimonials}+ <br />
          <span className="text-sm text-gray-500 font-medium">
            Testimonials
          </span>
        </p>
      </div>
      <button className="bg-white mt-2 border border-gray-200 text-black-500 px-8 py-0 rounded-2xl hover:bg-blue-50">
        Message
      </button>
    </div>
  );

  return (
    <>
      <div className="flex flex-row items-center justify-between px-4 py-3 md:px-3 md:py-0">
        <div className="flex flex-row items-center">
          <img
            src={logo}
            className="h-10 w-10 md:h-12 md:w-12"
            alt="Brandwave Logo"
          />
          <span className="text-blue-600">Brandwave</span>
        </div>

        <CgProfile size={26} className="text-blue-600" />
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 border px-2 py-1 rounded-xl text-sm">
            <MdFilterListOff size={18} />
            <span>Filter</span>
          </div>
          <div className="relative rounded-xl bg-gray-100 w-48 md:w-56">
            <IoSearch
              size={14}
              className="absolute  left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-3 bg-gray-100 rounded-xl text-sm focus:outline-none"
            />
          </div>
          <RiAlarmWarningFill size={22} className="text-blue-600" />
          <button className="py-0.5 px-3 border rounded-xl text-blue-900 text-sm">
            Login
          </button>
          <button className="py-1 px-3 border rounded-xl bg-blue-500 text-white text-sm">
            Sign Up
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 py-20">
        <div className="max-w-screen-xl text-center mx-auto px-20 py-8 col-span-3 ">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Showcase Your Brand As An Entrepreneur
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Build a professional page to highlight your brand, products, or
            services
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <div className="item-center  relative flex flex-row col-span-1 ">
          <img
            src={onco1}
            alt=""
            className="absolute left-16 rounded-3xl w-17 cover h-33"
          />
          <img
            src={onco2}
            alt=""
            className="absolute top-17 rounded-3xl cover w-17 h-33"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4 py-1">
        <div className="flex flex-row item-center bg-gray-100 w-[50%] justify-center gap-15 bg-gray-50 py-6 rounded-2xl mb-12">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">12k+</p>
            <p className="text-gray-600">Joined brands</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">100k+</p>
            <p className="text-gray-600">Visitors</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">10k+</p>
            <p className="text-gray-600">Reviews</p>
          </div>
        </div>
      </div>

      <hr className="mx-15  my-10" />

      <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4 py-10">
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Trending Brands</h2>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              See More
            </a>
          </div>
          <div className="flex flex-row gap-8 justify-between">
            {trendingBrands.map(renderCard)}
          </div>
        </section>

        {/* Industries */}
        <section className="space-y-12">
          {Object.entries(industries).map(([industry, brands]) => (
            <div key={industry}>
              <div className="flex bg-blue-800 justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white  px-4 py-1 rounded">
                  {industry}
                </h3>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  See More
                </a>
              </div>
              <div className="flex flex-wrap gap-8 justify-between">
                {brands.map((brand) =>
                  renderCard({ ...brand, category: industry })
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Pagination */}
        <div className="mt-12 text-center">
          <a href="#" className="text-purple-600 hover:underline">
            See more
          </a>
          <div className="mt-2 space-x-2">
            <button className="px-3 py-1 border rounded text-blue-600">
              1
            </button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
          </div>
        </div>
      </div>

      {/* Premium Features Section */}
      <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-200 text-gray-800 w-full py-8 rounded-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Premium Features
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Get a Whole lot From{" "}
          <a href="#" className="text-blue-500 underline">
            Brandwave
          </a>
        </p>

        <div className="w-full px-4 flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Free pack",
              features: [
                "User profile",
                "Showcase Builder",
                "Media Uploads",
                "Contact & Booking Form",
                "Social & External Links",
                "Dashboard With Basic Metrics",
              ],
              color: "text-pink-600",
            },
            {
              title: "Pack 1",
              features: [
                "Escrow Payement",
                "Custom Domain Usage",
                "Advance Analytics & Alerts",
                "Testimonials & Featured Sections",
                "Pro-only Branding Options",
                "Trial to Paid Upgrade Flow",
                "Scheduled Post Highlights or Campaigns",
              ],
              color: "text-purple-600",
            },
            {
              title: "Pack 2",
              features: [
                "Template Library",
                "Escrow Payement System",
                "Custom Domain Usage",
                "Advance Analytics & Alerts",
                "Testimonials & Featured Sections",
                "Pro-only Branding Options",
                "Trial to Paid Upgrade Flow",
                "Scheduled Post Highlights or Campaigns",
              ],
              color: "text-purple-600",
            },
          ].map((pack, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6">
              <h2 className={`text-xl font-semibold mb-4 ${pack.color}`}>
                {pack.title}
              </h2>
              <ul className="space-y-2 text-sm">
                {pack.features.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-6">
          <div className="bg-black text-white p-6 rounded-xl text-center max-w-md shadow-md">
            <h3 className="text-lg font-semibold text-blue-400">Brandwave</h3>
            <p className="mt-2 mb-4 text-sm">
              Have An Insight On The Core Values Of Brandwave
            </p>
            <a href="#" className="text-purple-400 underline text-sm">
              About Us →
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 text-white text-center text-sm py-10 w-full">
        <div className=" border-b border-white p-5 flex felx-col justify-center  gap-4 mb-2 mx-10">
          <a href="#" className="border-r border-white pr-4 hover:underline">
            Privacy Policy
          </a>{" "}
          <a href="#" className="border-r border-white pr-4 hover:underline">
            Faq
          </a>
          <a href="#" className="border-r border-white pr-4 hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>
        <p className="text-xs m-5">© 2025 Brandwave All Rights Reserved</p>
        <p className="text-xs">
          Brandwave - a Techyjaunt group Project for the Capstone Project, Group
          K
        </p>
      </footer>
    </>
  );
};

export default BrandwavePage;
