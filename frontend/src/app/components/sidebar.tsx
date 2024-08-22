import React from "react";
import {
  FaRunning,
  FaSwimmer,
  FaBasketballBall,
  FaFutbol,
  FaDumbbell,
  FaBadminton
} from "react-icons/fa";

const sidebar = () => {
  return (
    <div className="flex flex-none flex-col w-60 h-screen border-e border-black">
      <h1 className="flex justify-center mt-5 mb-3 h-12 cursor-pointer">
        Sport Complex
      </h1>
      <span className="inline-flex justify-center mb-5">
        <ul className="flex flex-row w-auto flex-wrap gap-12 cursor-pointer">
          <li className="">1</li>
          <li className="">2</li>
          <li className="">3</li>
          <li className="">4</li>
        </ul>
      </span>
      <nav className="flex-1">
        <ul className="flex flex-col text-gray-800">
          <li className="flex items-center px-5 py-3 border-b border-gray-300 border-l-4 border-l-transparent hover:bg-gray-100 hover:border-l-indigo-500 transition-all duration-300 cursor-pointer">
            <span className="mr-3 text-indigo-600">
              <FaRunning />
            </span>
            <span>Rules</span>
          </li>
          <li className="flex items-center px-5 py-3 border-b border-gray-300 border-l-4 border-l-transparent hover:bg-gray-100 hover:border-l-indigo-500 transition-all duration-300 cursor-pointer">
            <span className="mr-3 text-indigo-600">
              <FaDumbbell />
            </span>
            <span>Fitness</span>
          </li>
          <li className="flex items-center px-5 py-3 border-b border-gray-300 border-l-4 border-l-transparent hover:bg-gray-100 hover:border-l-indigo-500 transition-all duration-300 cursor-pointer">
            <span className="mr-3 text-indigo-600">
              <FaFutbol />
            </span>
            <span>Football</span>
          </li>
          <li className="flex items-center px-5 py-3 border-b border-gray-300 border-l-4 border-l-transparent hover:bg-gray-100 hover:border-l-indigo-500 transition-all duration-300 cursor-pointer">
            <span className="mr-3 text-indigo-600">
              <FaBasketballBall />
            </span>
            <span>Basketball</span>
          </li>
          <li className="flex items-center px-5 py-3 border-b border-gray-300 border-l-4 border-l-transparent hover:bg-gray-100 hover:border-l-indigo-500 transition-all duration-300 cursor-pointer">
            <span className="mr-3 text-indigo-600">
              <FaSwimmer />
            </span>
            <span>Swimming</span>
          </li>
          <li className="flex items-center px-5 py-3 border-b border-gray-300 border-l-4 border-l-transparent hover:bg-gray-100 hover:border-l-indigo-500 transition-all duration-300 cursor-pointer">
            <span className="mr-3 text-indigo-600">
              <FaBadminton />
            </span>
            <span>Badminton</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default sidebar;
