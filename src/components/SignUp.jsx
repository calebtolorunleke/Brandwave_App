import React from "react";
import logo from "../assets/brandwave.jpg";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdFilterListOff } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiAlarmWarningFill } from "react-icons/ri";
import {
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between p-4 md:px-8 bg-white shadow">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Brandwave Logo" className="h-10 w-10" />
          <span className="text-blue-600 font-bold text-lg">The Brandwave</span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <CgProfile size={24} className="text-blue-600" />
          <div className="flex items-center gap-2 border px-2 py-1 rounded-xl text-sm">
            <MdFilterListOff size={18} />
            <span>Filter</span>
          </div>
          <div className="relative w-44 md:w-60">
            <IoSearch
              className="absolute top-3 left-3 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 w-full rounded-xl bg-gray-100 focus:outline-none text-sm"
            />
          </div>
          <RiAlarmWarningFill size={22} className="text-blue-600" />
          <button
            onClick={() => navigate("/signin")}
            className="text-sm text-blue-900 border border-blue-900 px-4 py-2 rounded-xl hover:bg-blue-900 hover:text-white transition"
          >
            Login
          </button>
          <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded-xl">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Form Section */}
      <main className="px-4 py-8 max-w-4xl mx-auto">
        {/* Branding */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Brandwave" className="h-16" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">
            Sign up On Brandwave
          </h1>
          <p className="text-gray-600 mt-1">For Better Experience</p>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-10">
          <SocialButton
            icon={<FaGoogle className="text-red-500" />}
            text="Sign in with Google"
          />
          <SocialButton
            icon={<FaFacebookF className="text-blue-600" />}
            text="Sign in with Facebook"
          />
          <SocialButton
            icon={<FaLinkedinIn className="text-blue-700" />}
            text="Sign in with LinkedIn"
          />
          <SocialButton
            icon={<FaXTwitter className="text-black" />}
            text="Sign in with X"
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-gray-500 text-sm">or sign in with email</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Form Inputs */}
        <form className="space-y-6">
          <ResponsiveInputGroup
            inputs={[
              { placeholder: "Brand Name", type: "text" },
              { placeholder: "Reg No", type: "number" },
            ]}
          />
          <ResponsiveInputGroup
            inputs={[
              { placeholder: "Nigeria +234", type: "text" },
              { placeholder: "Phone Number", type: "number" },
            ]}
          />

          <TextInput
            label="Password"
            type="password"
            placeholder="Enter password"
          />
          <TextInput label="Email address" placeholder="Email address" />
          <TextInput label="Industry" placeholder="Enter your industry" />
          <TextInput label="Location" placeholder="Enter your location" />
          <TextInput label="C.E.O Name" placeholder="Enter C.E.O name" />
          <TextInput label="Vision" placeholder="Enter your vision statement" />
          <TextInput label="Add story" placeholder="Tell your brand story" />
          <TextInput label="Logo Upload" placeholder="Upload your logo" />
          <TextInput
            label="Pictures Upload"
            placeholder="Upload associated pictures"
          />
          <TextInput
            label="Create Catalogue"
            placeholder="Create a new catalogue"
          />

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="button"
              className="px-10 py-2 border border-gray-400 text-red-500 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-2 bg-blue-600 text-white rounded"
            >
              Proceed
            </button>
          </div>
        </form>
      </main>

      {/* Footer CTA */}
      <section className="flex justify-center my-12">
        <div className="bg-black text-white p-6 rounded-xl text-center max-w-md">
          <h3 className="text-lg font-semibold text-blue-400">Brandwave</h3>
          <p className="mt-2 mb-4 text-sm">
            Have An Insight On The Core Values Of Brandwave
          </p>
          <a href="#" className="text-purple-400 underline text-sm">
            About Us →
          </a>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-blue-600 text-white text-center py-10">
        <div className="flex flex-wrap justify-center gap-4 border-b border-white pb-4 mx-10">
          {["Privacy Policy", "FAQ", "Contact Us", "Help"].map((item) => (
            <a key={item} href="#" className="hover:underline text-sm">
              {item}
            </a>
          ))}
        </div>
        <p className="text-xs mt-4">© 2025 Brandwave. All Rights Reserved</p>
        <p className="text-xs">
          Brandwave - a Techyjaunt group Capstone Project, Group K
        </p>
      </footer>
    </div>
  );
};

const SocialButton = ({ icon, text }) => (
  <button className="flex items-center justify-center gap-3 px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 w-64 shadow">
    {icon}
    {text}
  </button>
);

const ResponsiveInputGroup = ({ inputs }) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {inputs.map((input, i) => (
      <input
        key={i}
        type={input.type}
        placeholder={input.placeholder}
        className="w-full sm:w-[250px] px-4 py-2 shadow-xl rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    ))}
  </div>
);

const TextInput = ({ label, placeholder, type = "text" }) => (
  <div className="flex flex-col">
    <label className="font-bold">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 mt-1 mb-4 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default SignUp;
