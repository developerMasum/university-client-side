import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCaro from "./TestimonialCaro";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonial data from a JSON file (replace with your API endpoint)
    fetch("https://university-server-side.vercel.app/feedback")
      .then((response) => response.json())
      .then((data) => {
        console.log("testi", data);
        setTestimonials(data);
      })
      .catch((error) =>
        console.error("Error fetching testimonial data:", error)
      );
  }, []);

  // Helper function to chunk the testimonials array into groups of 2
  const chunkArray = (arr, size) => {
    return arr.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
      []
    );
  };

  // Divide testimonials into chunks of 2
  const testimonialChunks = chunkArray(testimonials, 2);

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {testimonialChunks.map((chunk, index) => (
        <SwiperSlide key={index}>
          <div className="py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {chunk.map((data) => (
                <TestimonialCaro key={data.id} data={data} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
