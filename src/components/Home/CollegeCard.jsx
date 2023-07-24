import React, { useEffect, useState } from "react";
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

const CollegeCard = () => {
  const [collegesData, setCollegeData] = useState([]);
  useEffect(() => {
    fetch("https://university-server-side.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setCollegeData(data));
  }, []);

  return (
    <div className="my-container">
      <div className="text-center">
        <p className="text-xs uppercase text-gray-400">Most popular Colleges</p>
        <p className="text-cyan-600 text-xl font-bold">
          Most popular colleges in Bangladesh
        </p>
        <div className="flex items-center justify-center">
          <hr className="half-red-half-white h-1 w-96 " />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {collegesData.slice(0, 3).map((college, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              className="rounded-lg p-4 border border-gray-300 my-4 flex flex-col justify-between"
            >
              <div>
                <img
                  src={college.collegeImage}
                  alt="College"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-xl font-bold mt-4">
                  {college.collegeName}
                </h2>
                <div className="flex items-center mt-2">
                  <FaCalendar className="mr-2" />
                  <p className="text-sm">
                    Admission Dates: {college.admission_dates}
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
    </div>
  );
};

export default CollegeCard;
