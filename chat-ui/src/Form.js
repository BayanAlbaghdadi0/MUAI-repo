import React from "react";

function Form() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex items-center justify-center mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-6xl">👤</span>
        </div>
        <button className="bg-teal-500 text-white p-2 rounded-full ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Full name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700">City</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>City</option>
            </select>
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700">Area</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Area</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-teal-500 text-white p-2 rounded mt-4 hover:bg-teal-600">
          Verify
        </button>
      </form>
    </div>
  );
}

export default Form;
