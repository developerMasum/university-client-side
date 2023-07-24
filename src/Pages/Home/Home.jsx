import React from "react";
import SearchBar from "../../components/Home/SearchBar";
import GallerySection from "../../components/Home/Gallery";
import Testimonial from "../../components/Home/Testimonial";
import ResearchPaper from "../../components/Home/ResearchPaper";
import CollegeCard from "../../components/Home/CollegeCard";
import Hero from "../../components/Home/Banner";
// import GallerySection from '../../components/Home/Gallery';

const Home = () => {
  return (
    <div className="">
      <Hero />
      {/* <SearchBar /> */}
      <CollegeCard />
      <GallerySection />
      <ResearchPaper />
      <div>
        <div className="text-center mb-5">
          <p className="text-xs uppercase text-gray-400">Feedback</p>
          <p className="text-cyan-600 text-xl font-bold">
         What students and guardians say about  colleges
          </p>
          <div className="flex items-center justify-center">
            <hr className="half-red-half-white h-1 w-96 " />
          </div>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
