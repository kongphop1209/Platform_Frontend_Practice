import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMagnifyingGlass, faTrashCan, faUserEdit } from "@fortawesome/free-solid-svg-icons";

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
          <ul className="flex flex-row mx-8">
            <li className="flex-none w-1/12 flex justify-start items-center mt-3 text-sm">//</li>
            <li className="flex-none w-1/5 flex justify-start items-center mt-3 text-sm">//</li>
            <li className="flex-none w-1/5 flex justify-start items-center mt-3 text-sm">//</li>
            <li className="flex-none w-1/3 flex justify-start items-center mt-3 text-sm">//</li>
            <li className="flex-none w-1/12 flex justify-start items-center mt-3 text-sm text-white cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} className="bg-black hover:bg-blue-400 rounded-full p-2"/></li>
            <li className="flex-none w-1/12 flex justify-start items-center mt-3 text-sm text-white cursor-pointer"><FontAwesomeIcon icon={faUserEdit} className="bg-yellow-300 hover:bg-yellow-500 rounded-full p-2"/></li>
            <li className="flex-none w-1/12 flex justify-start items-center mt-3 text-sm text-white cursor-pointer"><FontAwesomeIcon icon={faTrashCan} className="bg-red-400 hover:bg-red-700 rounded-full p-2"/></li>
          </ul>
        </span>
      </div>
      <div>
        <button className="items-center mx-5 my-2 px-2 bg-white border border-blue-400 text-black rounded-md text-base">
          <b className="text-sm">1</b>
        </button>
      </div>
    </div>
  );
};

export default UsersInfo;
