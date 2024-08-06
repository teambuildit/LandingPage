import React from "react";
import Card from "./card.jsx";
const Features = () => {
  return (
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
  );
};

export default Features;
