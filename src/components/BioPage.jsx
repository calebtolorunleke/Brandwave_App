import React from "react";
import logo from "../assets/brandwave.jpg";
import { CgProfile } from "react-icons/cg";
import { MdFilterListOff } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiAlarmWarningFill } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { LuNotepadText } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import imageCat1 from "../images/imageCat1.jpg";
import imageCat2 from "../images/imageCat2.jpg";

const BioPage = () => {
  return (
    <div className="mt-0">
      <div className="flex flex-row items-center justify-between px-20">
        <img src={logo} className="h-[100px] w-[100px]" alt="Brandwave Logo" />
        <CgProfile size={50} color="blue" />

        <div className="flex flex-row items-center justify-between gap-[60px] py-10">
          <div className="flex flex-row items-center gap-5 border px-7 h-10 py-7 rounded-xl">
            <MdFilterListOff size={30} color="#333" />
            <span>Filter</span>
          </div>

          <div className="relative w-[400px]">
            <IoSearch
              size={20}
              color="#333"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-4 pl-12 pr-4 bg-gray-100 rounded-xl focus:outline-none"
            />
          </div>

          <RiAlarmWarningFill size={50} color="blue" />

          <button className="py-4 border rounded-2xl w-[150px] text-blue-900">
            Login
          </button>
          <button className="py-4 border rounded-2xl w-[150px] bg-blue-500 text-white">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="bg-blue-600 h-[1250px] p-5 w-[20%] text-white gap-10 mr-15">
          <div className="flex flex-row gap-3 items-center text-white mb-9">
            <img
              src=""
              alt=""
              className="h-[30px] w-[30px] rounded-4xl bg-white"
            />
            <div>
              <h5>Welcome back</h5>
              <h6>Name</h6>
            </div>
          </div>

          <ul className="flex flex-col items-center gap-10 w-full">
            <li className="flex items-center gap-5">
              <MdHomeFilled />
              <span>Home</span>
            </li>
            <li className="flex items-center gap-5">
              <LuNotepadText />
              <span>Catalogue</span>
            </li>
            <li className="flex items-center gap-5">
              <FiMessageCircle />
              <span>Message</span>
            </li>
            <li className="flex items-center gap-5">
              <LuSettings />
              <span>Settings</span>
            </li>
            <li className="flex items-center gap-5">
              <CgProfile />
              <span>Profile</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="p-10 w-full flex flex-col gap-10">
          {/* Fashion Designer Profile Section */}
          <div className="flex flex-row gap-5 items-end">
            <img
              src=""
              alt=""
              className="h-[70px] w-[70px] rounded-4xl bg-white border"
            />
            <div className="font-xl font-bold">
              <h5>Luxesun</h5>
              <h6>Fashion Designer</h6>
            </div>
          </div>

          {/* Metric Card Section */}
          <div className="w-[600px] h-[200px] flex flex-col gap-7 p-5 bg-black text-white rounded-2xl items-center ml-auto">
            <h1 className="text-blue-500 text-xl font-bold">Metric Card</h1>
            <div className="flex flex-row gap-10">
              {/* Viewers */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row gap-3">
                  <span className="text-pink-300 text-lg font-semibold">
                    20k
                  </span>
                  <span>Viewers</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-green-400"></div>
              </div>

              {/* Testimonials */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row gap-3">
                  <span className="text-pink-300 text-lg font-semibold">
                    70+
                  </span>
                  <span>Testimonials</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              </div>

              {/* Bookings */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row gap-3">
                  <span className="text-pink-300 text-lg font-semibold">
                    -10
                  </span>
                  <span>Bookings</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5 items-center">
            <div className="shadow-xl flex flex-row w-[350px] p-3 px-10 gap-5 items-center justify-between rounded-3xl">
              <FaInstagram size={50} />
              <FaXTwitter size={50} />
              <FaLinkedin size={50} />
            </div>
            <button className="border p-4 rounded-2xl">Edit profile</button>
            <BiMessageDetail size={70} />
          </div>

          <div className="flex flex-col bg-gray-200 p-10 rounded-3xl m-5">
            <h1 className="font-bold text-3xl pb-5">Catalog</h1>
            <div className="flex flex-row gap-7 justify-between">
              <div>
                <img
                  src={imageCat1}
                  className="h-[350px] w-[450px] rounded-2xl"
                  alt=""
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Product Name</h1>
                  <h4 className="text-3xl">$60</h4>
                  <h6 className="text-3xl">Short Description of the product</h6>
                  <button className="text-3xl p-5 bg-blue-500 text-white rounded-2xl">
                    View Details
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={imageCat1}
                  className="h-[350px] w-[450px] rounded-2xl"
                  alt=""
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Product Name</h1>
                  <h4 className="text-3xl">$60</h4>
                  <h6 className="text-3xl">Short Description of the product</h6>
                  <button className="text-3xl p-5 bg-blue-500 text-white rounded-2xl">
                    View Details
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={imageCat1}
                  className="h-[350px] w-[450px] rounded-2xl"
                  alt=""
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Product Name</h1>
                  <h4 className="text-3xl">$60</h4>
                  <h6 className="text-3xl">Short Description of the product</h6>
                  <button className="text-3xl p-5 bg-blue-500 text-white rounded-2xl">
                    View Details
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={imageCat1}
                  className="h-[350px] w-[450px] rounded-2xl"
                  alt=""
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Product Name</h1>
                  <h4 className="text-3xl">$60</h4>
                  <h6 className="text-3xl">Short Description of the product</h6>
                  <button className="text-3xl p-5 bg-blue-500 text-white rounded-2xl">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="Testimonials"
            className="flex flex-col bg-gray-200 gap-10 p-10 text-3xl rounded-3xl items-center justify-center m-5"
          >
            <h1 className="text-blue-600">Testimonials</h1>

            <div className="flex flex-row justify-between gap-5">
              <div className="flex flex-col shadow-3xl bg-white rounded-2xl p-8 w-[30%]">
                <h2>Mary Silas</h2>
                <div className=" flex flex-row gap-6 my-4">
                  <img
                    src={imageCat1}
                    className="h-[70px] w-[70px] rounded-4xl"
                    alt=""
                  />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia totam tempore vel?
                  </span>
                </div>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis impedit ipsa recusandae.
                </h5>
              </div>

              <div className="flex flex-col shadow-3xl bg-white rounded-2xl p-8 w-[30%]">
                <h2>Mary Silas</h2>
                <div className=" flex flex-row gap-6 my-4">
                  <img
                    src={imageCat1}
                    className="h-[70px] w-[70px] rounded-4xl"
                    alt=""
                  />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia totam tempore vel?
                  </span>
                </div>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis impedit ipsa recusandae.
                </h5>
              </div>

              <div className="flex flex-col shadow-3xl bg-white rounded-2xl p-8 w-[30%]">
                <h2>Mary Silas</h2>
                <div className=" flex flex-row gap-6 my-4">
                  <img
                    src={imageCat1}
                    className="h-[70px] w-[70px] rounded-4xl"
                    alt=""
                  />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia totam tempore vel?
                  </span>
                </div>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis impedit ipsa recusandae.
                </h5>
              </div>
            </div>
          </div>

          <div
            id="mva"
            className="flex flex-row bg-gray-200 gap-10 p-10 text-3xl rounded-3xl items-center justify-center m-5"
          >
            <div className="flex flex-col shadow-3xl bg-white rounded-2xl p-4 gap-5">
              <h1>Mission</h1> <hr className="bg-gray-100" />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus sed repellat optio ipsa officia ad?
              </h5>
            </div>

            <div className="flex flex-col shadow-3xl bg-white rounded-2xl p-4 gap-5">
              <h1>Vision</h1> <hr className="bg-gray-100" />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus sed repellat optio ipsa officia ad?
              </h5>
            </div>

            <div className="flex flex-col shadow-3xl bg-white rounded-2xl p-4 gap-5">
              <h1>Awards</h1> <hr className="bg-gray-100" />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus sed repellat optio ipsa officia ad?
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Premium Features</h1>
      </div>
    </div>
  );
};

export default BioPage;
