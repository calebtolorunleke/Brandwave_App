import React from "react";
import logo from "../assets/brandwave.jpg";
import { CgProfile } from "react-icons/cg";
import { MdFilterListOff, MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiAlarmWarningFill } from "react-icons/ri";
import {
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const SignUp = () => {
  return (
    <>
      <div className="p-3">
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

        <div className="flex flex-col items-center ">
          <img src={logo} alt="" className="w-100" />
        </div>

        <div className="flex flex-col items-center gap-4 max-w-sm mx-auto">
          <h1 className="text-blue-600 font-bold text-3xl">
            Sign up On Brandwave
          </h1>
          <p>For Better Experience</p>
          <div className="grid grid-cols-4 justify-center py-1 gap-30">
            <div className="col-span-2">
              <button className="flex items-center justify-center gap-3 px-5 w-60 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 mb-10 shadow-2xl ">
                <FaGoogle className="text-red-500" />
                Sign in with Google
              </button>
              <button className="flex items-center shadow-2xl justify-center gap-3 px-5 w-60  py-3 border border-gray-300 rounded-lg hover:bg-gray-100 mb-5">
                <FaFacebookF className="text-blue-600" />
                Sign in with Facebook
              </button>
            </div>
            <div className="col-span-2">
              <button className="flex items-center shadow-2xl justify-center gap-3 px-5 w-60  py-3 border border-gray-300 rounded-lg hover:bg-gray-100 mb-10">
                <FaLinkedinIn className="text-blue-700" />
                Sign in with LinkedIn
              </button>
              <button className="flex items-center shadow-2xl justify-center gap-3 px-5 w-60  py-3 border border-gray-300 rounded-lg hover:bg-gray-100 mb-5">
                <FaXTwitter className="text-black" />
                Sign in with X
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center  justify-center mx-auto gap-4 my-8 w-full max-w-sm">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="text-gray-500 text-sm">or sign in with email</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center my-5">
          <input
            type="text"
            placeholder="Brand Name"
            className="w-[250px] sm:max-w-xs px-4 py-2 shadow-xl rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Reg No"
            className="w-[250px] sm:max-w-xs px-4 py-2 shadow-xl rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center my-5">
          <input
            type="text"
            placeholder="Nigeria +234"
            className="w-[250px] sm:max-w-xs px-4 py-2 shadow-xl rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Phone Number"
            className="w-[250px] sm:max-w-xs px-4 py-2 shadow-xl rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" flex flex-col ">
          <label htmlFor="" className="font-bold">
            Password
          </label>
          <div className=" flex flex-row gap-15 w-130">
            <input
              type="text"
              placeholder="Password"
              className="border border-black-300 mt-1 mb-5 p-1 w-full rounded"
            />
            <a href="">Show</a>
          </div>
          <label htmlFor="" className="font-bold">
            Email address
          </label>
          <input
            type="text"
            placeholder="Email address"
            className="border border-black-300 mt-1 mb-5 p-1 w-full rounded"
          />
          <label htmlFor="" className="font-bold">
            Industry
          </label>
          <input
            type="text"
            placeholder="Enter your industry"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />

          <label htmlFor="" className="font-bold">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter your location"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />

          <label htmlFor="" className="font-bold">
            C.E.O Name
          </label>
          <input
            type="text"
            placeholder="Enter C.E.O name"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />
          <label htmlFor="" className="font-bold">
            Vision
          </label>
          <input
            type="text"
            placeholder="Enter your vision statement"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />
          <label htmlFor="" className="font-bold">
            Add story
          </label>
          <input
            type="text"
            placeholder="Tell your brand story"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />
          <label htmlFor="" className="font-bold">
            Logo upload{" "}
          </label>
          <input
            type="text"
            placeholder="Upload your logo"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />

          <label htmlFor="" className="font-bold">
            Pictures Upload{" "}
          </label>
          <input
            type="text"
            placeholder="Upload associated pictures"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />

          <label htmlFor="" className="font-bold">
            Create catalogue{" "}
          </label>
          <input
            type="text"
            placeholder="Create a new catalogue"
            className="border border-gray-300 mt-1 mb-5 p-1 w-full rounded"
          />
        </div>

        <div className="flex flex-row gap-3 mb-7">
          <button className="py-1 border border-black rounded  px-12 text-red-400">
            Cancel
          </button>
          <button className="py-1 bg-blue-600 rounded  px-12 text-white">
            Proceed
          </button>
        </div>
      </div>

      <div className="flex justify-center py-4 my-15">
        <div className="bg-black text-white p-6 rounded-xl text-center max-w-md shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Brandwave</h3>
          <p className="mt-2 mb-4 px-10 text-sm">
            Have An Insight On The Core Values Of Brandwave
          </p>
          <a href="#" className="text-purple-400 underline text-sm">
            About Us →
          </a>
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

export default SignUp;
