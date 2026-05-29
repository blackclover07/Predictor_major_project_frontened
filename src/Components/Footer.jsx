import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#161317] w-full p-5 h-auto min-h-50 flex justify-center items-center gap-3 flex-col flex-wrap">
        <div className="w-full p-2 flex justify-around items-center flex-wrap gap-5">
          <div className="p-2 flex justify-around items-baseline flex-col">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-40 h-12 mb-4 rounded"
            />
            <p className="text-sm text-white pop-font">
              Nothing conformation only Predictions.
            </p>
          </div>
          <div className="p-2 flex justify-around items-center flex-col gap-5">
            <p className="text-white text-xl fun-top"> Stay in touch</p>
            <div className="flex text-3xl text-white gap-6 mb-4">
              <a href="">
                
                <i class="ri-facebook-box-fill hover:text-red-500"></i>
              </a>
              <a href="">
                
                <i class="ri-instagram-line hover:text-red-500"></i>
              </a>
              <a href="">
                
                <i class="ri-twitter-x-line hover:text-red-500"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-around items-baseline flex-col p-2">
            <p className="text-white fun-font p-2 text-lg">
              Predictor's Newsletters
            </p>
            <form>
              <input
                className="bg-amber-50 p-2 h-11 w-50 rounded lg:w-70"
                placeholder="Enter Email"
              />
              <button className="bg-red-400 text-white m-2 rounded p-2.5 uppercase">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="w-full p-2 flex justify-center items-center">
          <p className="text-white pop-font text-sm align-middle w-70 p-3 leading-7 lg:w-200">
            No &copy; copywrite. Feel free to copy 2026{" "}
            <span className="p-1 bg-blue-400 text-white rounded m-2">
              Predictor 2.0
            </span>
            Made by
            <Link to="/teams" className="text-blue-400 p-1">
               Team Predictor
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
