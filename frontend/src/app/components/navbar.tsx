import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="flex-1 h-screen bg-blue-100">
      <div className="flex justify-center items-center bg-red-500 h-12">
        <h1 className=" text-white size-10 w-auto h-auto cursor-pointer">
          <Link href="/">
            <a>Sport Complex</a>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default navbar;
