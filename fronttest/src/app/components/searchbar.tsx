"use client";

import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center mt-4 flex-1 ml-5">
      <div className="inline-flex flex-1 max-w-lg">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-full p-3 pl-5 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-r-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
