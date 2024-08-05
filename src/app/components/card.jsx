import React from "react";

const Card = ({ title, body }) => {
  return (
    <div className="card bg-slate-200 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-blue-900">{title}</h2>
        <p className="text-blue-600 text-sm">{body}</p>
      </div>
    </div>
  );
};

export default Card;
