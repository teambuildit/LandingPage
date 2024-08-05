import React from "react";
import Image from "next/image";
import heroimg from "../../public/img.PNG";
import Card from "./components/card";
const Home = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="mx-32 my-12">
        <h3 className="text-sky-400 text-sm italic font-semibold">Want a habit?</h3>
        <h1 className="text-4xl font-bold text-sky-600 m">BUILDIT</h1>
      </div>

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
              className="border rounded-xl shadow-lg py-4 px-2 bg-slate-200 placeholder-slate-600 "
            />
            <button className="bg-blue-400 border rounded-xl py-4 px-4  hover:bg-blue-500 active:bg-blue-600 ">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      {/* features div */}
      <div className="flex flex-col justify-center mt-8">
        <h1 className="text-2xl text-sky-600 mx-16 font-bold my-4 ml-36 ">
          Why BuildIT?
        </h1>
        <div className="features flex items-center justify-center gap-10 mt-4 mb-10">
          <Card
            title="Set meaningful goals"
            body="Define your vision of success and set goals that align with it. Our tools help you create a clear plan and hold yourself accountable. "
          />
          <Card
            title="Track your progress"
            body="  Our easy-to-use habit tracker shows your progress over time. You can see how far you've come and what needs improvement."
          />
          <Card
            title="Create SMART habits"
            body="Utilize our SMART criteria to build habits that are Specific, Measurable, Achievable, Relevant, and Time-bound."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
