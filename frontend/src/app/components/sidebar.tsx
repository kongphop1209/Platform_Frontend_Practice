import React from "react";

const sidebar = () => {
  return (
    <div className="flex flex-none flex-col w-60 h-screen border-e border-black">
      <h1 className="flex justify-center mt-5 mb-3 h-12 cursor-pointer">Sport Complex</h1>
      <span className="inline-flex justify-center">
        <ul className="flex flex-row w-auto flex-wrap gap-12 cursor-pointer">
          <li className="">1</li>
          <li className="">2</li>
          <li className="">3</li>
          <li className="">4</li>
        </ul>
      </span>
      <div className="mt-5">
        <ul className="flex flex-col cursor-pointer">
          <li className="border-b border-t border-black ps-5 hover:bg-slate-500 py-3">Rules</li>
          <li className="border-b border-black ps-5 hover:bg-slate-500 py-3">Badminton</li>
          <li className="border-b border-black ps-5 hover:bg-slate-500 py-3">Football</li>
          <li className="border-b border-black ps-5 hover:bg-slate-500 py-3">Basketball</li>
          <li className="border-b border-black ps-5 hover:bg-slate-500 py-3">Swimming</li>
          <li className="border-b border-black ps-5 hover:bg-slate-500 py-3">Fitness</li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
