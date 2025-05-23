import React from "react";
import logo from "../assets/brandwave.jpg";
import { CgProfile } from "react-icons/cg";
import { MdFilterListOff, MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { LuNotepadText, LuSettings } from "react-icons/lu";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import imageCat1 from "../images/imageCat1.jpg";

const BioPage = () => {
  return (
    <div className="mt-0">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <img
          src={logo}
          className="h-10 w-10 md:h-12 md:w-12"
          alt="Brandwave Logo"
        />
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 border px-3 py-2 rounded-xl text-sm">
            <MdFilterListOff size={18} />
            <span>Filter</span>
          </div>
          <div className="relative w-48 md:w-56">
            <IoSearch
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-3 bg-gray-100 rounded-xl text-sm focus:outline-none"
            />
          </div>
          <RiAlarmWarningFill size={22} className="text-blue-600" />
          <button className="py-1.5 px-3 border rounded-xl text-blue-900 text-sm">
            Login
          </button>
          <button className="py-1.5 px-3 border rounded-xl bg-blue-500 text-white text-sm">
            Sign Up
          </button>
          <CgProfile size={26} className="text-blue-600" />
        </div>
      </div>

      <main className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-blue-600 min-h-[300px] max-h-[600px] p-4 w-full md:w-1/5 text-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-7 w-7 rounded-full bg-white" />
            <div>
              <h5 className="text-xs">Welcome back</h5>
              <h6 className="text-xs font-light">Name</h6>
            </div>
          </div>
          <ul className="flex flex-col gap-5 text-sm">
            <li className="flex items-center gap-2">
              <MdHomeFilled /> <span>Home</span>
            </li>
            <li className="flex items-center gap-2">
              <LuNotepadText /> <span>Catalogue</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMessageCircle /> <span>Message</span>
            </li>
            <li className="flex items-center gap-2">
              <LuSettings /> <span>Settings</span>
            </li>
            <li className="flex items-center gap-2">
              <CgProfile /> <span>Profile</span>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="p-4 md:p-6 w-full flex flex-col gap-6">
          {/* Profile Section */}
          <div className="flex items-end gap-3">
            <div className="h-10 w-10 rounded-full bg-white border" />
            <div>
              <h5 className="text-base font-semibold">Luxesun</h5>
              <h6 className="text-sm text-gray-600">Fashion Designer</h6>
            </div>
          </div>

          {/* Metric Card */}
          <div className="w-full max-w-md p-4 bg-black text-white items-center flex flex-col gap-5 rounded-2xl self-end">
            <h1 className="text-blue-500 text-base font-bold mb-2">
              Metric Card
            </h1>
            <div className="flex flex-row gap-20 justify-between">
              {[
                { label: "Viewers", value: "20k", color: "bg-green-400" },
                { label: "Testimonials", value: "70+", color: "bg-yellow-400" },
                { label: "Bookings", value: "-10", color: "bg-red-500" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-pink-300 font-semibold">
                    {item.value}
                  </span>
                  <span className="text-xs">{item.label}</span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full mt-1 ${item.color}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="shadow-md flex gap-3 p-2 rounded-xl">
              <FaInstagram size={20} />
              <FaXTwitter size={20} />
              <FaLinkedin size={20} />
            </div>
            <button className="border px-3 py-1.5 rounded-xl text-sm">
              Edit profile
            </button>
            <BiMessageDetail size={24} />
          </div>

          {/* Catalog */}
          <div className="flex flex-col bg-gray-200 p-4 rounded-xl">
            <h1 className="text-xl font-bold mb-4">Catalog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i}>
                  <img
                    src={imageCat1}
                    className="h-52 w-full object-cover rounded-xl"
                    alt="Product"
                  />
                  <div className="flex flex-col gap-1 mt-2">
                    <h1 className="text-base font-semibold">Product Name</h1>
                    <h4 className="text-sm">$60</h4>
                    <p className="text-xs text-gray-600">Short Description</p>
                    <button className="mt-1 py-1.5 px-3 bg-blue-500 text-white rounded-xl text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-200 p-8 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-blue-600 text-xl font-bold mb-4">
              Testimonials
            </h1>
            <div className="flex flex-wrap justify-center gap-10 w-full max-w-5xl">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow-md w-full md:w-[30%] text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={imageCat1}
                      className="h-10 w-10 rounded-full"
                      alt="Customer avatar"
                    />
                    <div>
                      <h2 className="text-sm font-bold">Mary Silas</h2>
                      <p className="text-xs text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos voluptatem recusandae architecto!"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Vision Awards */}
          <div className="bg-gray-200 p-8 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-blue-600 text-xl font-bold mb-6">
              Our Mission, Vision & Awards
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
              {["Mission", "Vision", "Awards"].map((title, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-3"
                >
                  <h2 className="text-lg font-bold text-blue-700">{title}</h2>
                  <hr className="w-12 border-blue-200" />
                  <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus sed repellat optio ipsa officia ad?
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
};

export default BioPage;
