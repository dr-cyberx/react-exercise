import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const Progress = () => {
  const [percentage, setPercentage] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setPercentage((preVal) => {
        return Math.min(preVal + 1, Math.max(100, 0));
      });
    }, 50);
  }, []);

  return (
    <div>
      <ProgressBar
        percentage={percentage}
        onComplete={() => setIsSuccess(true)}
      />

      <div className="success-indicator">
        {isSuccess ? "Completed!" : "Loading..."}
      </div>
    </div>
  );
};

export default Progress;
