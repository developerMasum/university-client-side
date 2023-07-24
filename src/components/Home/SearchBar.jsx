import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaBook,
  FaFlag,
  FaFutbol,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [collegesData, setColleges] = useState([]);

  const handleSearch = () => {
    fetch(`https://university-server-side.vercel.app/search/${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setColleges(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error searching colleges:", error);
      });
  };

  const collegeVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <h2 className="text-gray-400 font-bold mb-4 text-center">
        Search your college name ?{" "}
      </h2>
      <div className="flex items-center w-96  mx-auto rounded-full ">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 rounded-full focus:outline-none shadow-slate-400"
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center w-12 h-12 text-white bg-[#11b2ed] rounded-full  hover:bg-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35"
            />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </button>
      </div>

      <div>
        {collegesData.length > 0 && (
          <p className="text-green-800 font-bold">
            College found:{collegesData.length}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {collegesData.map((college, index) => (
          <motion.div
            key={index}
            variants={collegeVariants}
            initial="initial"
            animate="animate"
            className="bg-slate-50 bg-opacity-50 rounded-lg shadow-md p-5 my-4 flex flex-col justify-between"
          >
            <div>
              <img
                src={college.collegeImage}
                alt="College"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4">{college.collegeName}</h2>
              <div className="flex items-center mt-2">
                <FaCalendar className="mr-2" />
                <p className="text-sm">
                  Admission Dates: {college.admissionDates}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <FaBook className="mr-2" />
                <p className="text-sm">Events: {college.events}</p>
              </div>
              <div className="flex items-center mt-2">
                <FaFlag className="mr-2" />
                <p className="text-sm">
                  Research History: {college.researchHistory}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <FaFutbol className="mr-2" />
                <p className="text-sm">Sports: {college.sports}</p>
              </div>
            </div>
            <div className="mt-auto">
              <Link to={`/details/${college._id}`}>
                <button className="w-full bg-[#11b2ed] text-white font-bold py-2 px-4 rounded-md flex items-center justify-center">
                  <FaArrowRight className="mr-2" /> Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
