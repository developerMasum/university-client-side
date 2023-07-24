import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://university-server-side.vercel.app/colleges")
      .then((response) => response.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);
  return (
    <div className="pt-16 my-container">
      {/* <h2 className="text-2xl font-bold text-center mb-5 ">Admission Going On </h2>
       */}
      <div className="text-center mb-5 mt-10">
        <p className="text-xs uppercase text-gray-400">ALL Colleges</p>
        <p className="text-cyan-600 text-xl font-bold">
          Pick a College to get started your study
        </p>
        <div className="flex items-center justify-center">
          <hr className="half-red-half-white h-1 w-80 " />
        </div>
      </div>
      <div className="grid grid-cols-3">
        {/* Map through the list of colleges and attach the click event */}
        {colleges.map((college) => (
          <div>
            <Link to={`/admission-form/${college._id}`}>
              <div className="  w-96 bg-base-100 ">
                <figure>
                  <img src={college.collegeImage} alt="Shoes" />
                </figure>
                <div className="">
                  <p className="text-xl font-semibold mt-2">
                    {college.collegeName}
                  </p>
                  <p className="text-sm font-bold">{college.location}</p>
                </div>
              </div>
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
