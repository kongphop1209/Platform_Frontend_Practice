import React from "react";

const UsersInfo = () => {
  return (
    <div className="inline-flex flex-col w-full mt-4 h-full">
      <div className="bg-blue-400 mx-5 py-2">
        <span>
          <ul className="flex flex-row mx-8 text-white">
            <li className="flex-none w-1/12 flex justify-start">ID</li>
            <li className="flex-none w-1/5 flex justify-start">Username</li>
            <li className="flex-none w-1/5 flex justify-start">Name</li>
            <li className="flex-none w-1/3 flex justify-start">Email</li>
          </ul>
        </span>
      </div>
      <div className="bg-white mx-5 my-2 h-full">
        <span>
          <ul className="flex flex-row mx-8 text-white">
            <li className="flex-none w-1/12 flex justify-start">//</li>
            <li className="flex-none w-1/5 flex justify-start">//</li>
            <li className="flex-none w-1/5 flex justify-start">//</li>
            <li className="flex-none w-1/3 flex justify-start">//</li>
            <li className="flex-none w-1/12 flex justify-start">//</li>
            <li className="flex-none w-1/12 flex justify-start">//</li>
            <li className="flex-none w-1/12 flex justify-start">//</li>
          </ul>
        </span>
      </div>
      <div>
        <button className="items-center mx-5 my-2 px-2 bg-black text-white rounded-md text-base">
          1
        </button>
      </div>
    </div>
  );
};

export default UsersInfo;
