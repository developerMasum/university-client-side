import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from "../../components/Utils/Loader";
import axios from "axios";
import { FaAddressCard, FaSchool } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import ReviewForm from "../../components/Feedback/FeedBackForm";

const MyCollege = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios
      .get(`https://university-server-side.vercel.app/candidate/${email}`)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [email]);

  if (loading) {
    return <Loader />;
  }
  //   console.log('data',data);
  //   const a= typeof (data);
  //   console.log(a);

  const {
    collegeName,
    collegeImage,
    details,
    featuredImage,
    location,
    admissionDates,
    sports,
    admissionWebsite,
    events,
    research,
  } = data;

  return (
    <div>
      <div>
        <div className="my-container">
          <div
            className="featured-item bg-fixed text-white mt-2 mb-5"
            style={{
              backgroundImage: `url(${collegeImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "450px",
              display: "flex", // Added display flex
              alignItems: "center", // Vertically center the content
            }}
          >
            <div className="md:flex flex-col justify-center w-full items-center bg-slate-500 bg-opacity-60 pb-20 pt-36 px-36">
              <p className="font-bold flex  justify-center gap-3">
                {" "}
                <span>
                  <FaSchool className="h-16 w-16 text-lime-400" />
                </span>
              </p>
              <hr className="bg-red-900 w-64 mb-2" />
              <div className="md:ml-10">
                <h2 className="text-3xl font-semibold"> {collegeName}</h2>
              </div>
            </div>
          </div>

          {/* details */}

          <div className="flex items-center gap-5">
            <div>
              <p>{details}</p>
            </div>

            <div className="w-4/5">
              <button className="btno">Get More Details</button>
            </div>
          </div>

          {/* location and admission details  */}
          <div className="mt-3 flex items-center justify-center">
            <div className="mt-3">
              <img src={featuredImage} className="w-3/5 rounded-md" alt="" />
            </div>
            <div>
              <p className="flex items-center gap-1 font-bold">
                {" "}
                <BiCurrentLocation className="w-6 h-6" /> Address:
              </p>
              <p>{location}</p>

              <p className="flex items-center gap-1 font-bold mt-2">
                {" "}
                <FaAddressCard className="w-6 h-6" /> Admission Period:
              </p>
              <p>{admissionDates}</p>

              <p className="flex items-center gap-1 font-bold mt-2">
                {" "}
                <BsPersonFillAdd className="w-6 h-6" /> For Admission Process:
              </p>

              <a className="underline text-blue-500" href={admissionWebsite}>
                {admissionWebsite}
              </a>
            </div>
          </div>
          {/* sports */}
          <div className="flex gap-2">
            <div className="mt-10 mb-3">
              <h2 className="font-bold">Sports</h2>
              {/* {sports.map((sport, index) => (
    <li className='p-2' key={index}>{sport}</li>
  ))} */}
            </div>
            <div className="mt-10 mb-3">
              <h2 className="font-bold">Events</h2>
            </div>
          </div>

          {/* research */}

          <div>
            <div>
              {/* {
            research.map(r=> console.log(r))
        } */}
            </div>
          </div>
        </div>
      </div>

      {/* <div>
<h2> FEEDBACK </h2>
<div>
    
</div>

    </div> */}

      <ReviewForm />
    </div>
  );
};

export default MyCollege;
