import React from "react";
import Image from "next/image";
import heroimg from "../../public/img.png";
import Header from "./components/header";
import Features from "./components/features";
import Footer from "./components/footer";
import { motion } from "framer-motion";
const Home = () => {
  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5, // Animation duration in seconds
      },
    },
  };

  return (
    <div className="flex flex-col bg-slate-200">
      <Header />
      {/* hero div */}
      <div className="hero flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16 border">
        <div className="hidden sm:block">
          <Image
            src={heroimg}
            alt="hero image"
            width={250}
            height={500}
            className="border rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-blue-900 my-6 md:my-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Build better habits
            <br />
            with BuildIT
          </h1>
          <p className=" text-base text-center md:text-left md:text-lg font-semibold mx-12 md:mx-0 my-8">
            BuildIT helps you set goals, track your progress,
            <br className="hidden md:block" />
            and celebrate your wins. It is easy to use, beautifully designed,
            <br className="hidden md:block" />
            and made to help you succeed.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-start gap-6">
            <input
              placeholder="Email Address"
              className="border rounded-xl shadow-lg py-4 px-2 bg-slate-200 placeholder-slate-600 "
            />
            <button className="bg-blue-400 border rounded-xl py-4 px-4  hover:bg-blue-500 active:bg-blue-600 ">
              Join Waitlist
            </button>
          </div>
          <div>
            <p className="text-sm text-cyan-600 font-semibold italic mt-4">
              Early members will get exclusive
              <br />
              access to premium features.
            </p>
          </div>
        </div>
      </div>
      {/* features div */}
      <Features />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
