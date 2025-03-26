import React, { useEffect, useState } from "react";
import "../App.css";

const ProgressBar = ({ percentage, onComplete }) => {
  useEffect(() => {
    if (percentage >= 100) {
      onComplete();
    }
  }, [percentage]);
  return (
    <div className="progress">
      <div className="progress-child" style={{ width: `${percentage}%` }} />
      <span
        className="progress-percentage-span"
        style={{ color: `${percentage >= 49 ? "black" : "white"}` }}
      >
        {percentage}%{" "}
      </span>
    </div>
  );
};

export default ProgressBar;
