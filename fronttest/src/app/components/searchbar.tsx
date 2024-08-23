import React, { useState } from "react";

const searchbar: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", query);
    // Add your search handling logic here
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center mt-4">
      <div className="relative w-2/3 max-w-lg">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search users..."
          className="w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-r-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default searchbar;
