import React from "react";
import Image from "next/image";
import heroimg from "../../public/img.PNG";

const Home = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="text-4xl font-bold text-sky-600 mx-16 my-12">BUILDIT</div>
      {/* hero div */}
      <div className="hero flex justify-center items-start gap-12">
        <Image
          src={heroimg}
          alt="hero image"
          width={250}
          height={500}
          className="border rounded-lg"
        ></Image>
        <div className="flex flex-col text-blue-900 my-12">
          <h1 className="text-5xl font-bold">
            Build better habits
            <br />
            with BuildIT
          </h1>
          <p className="text-lg font-semibold my-8">
            BuildIT helps you set goals, track your progress,
            <br />
            and celebrate your wins. It is easy to use, beautifully designed,
            <br />
            and free.
          </p>
          <div className="flex items-center justify-start gap-6">
            <input
              placeholder="Email Address"
              className="border rounded-xl shadow-lg py-4 px-2 bg-slate-200 placeholder-slate-600 focus:border-slate-600"
            />
            <button className="bg-blue-400 border rounded-xl py-4 px-4 ">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      {/* features div */}
      <div></div>
    </div>
  );
};

export default Home;
