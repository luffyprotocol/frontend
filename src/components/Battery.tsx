import React, { useEffect } from "react";

interface BatteryProps {
  step: number;
  totalSteps: number;
}

const Battery: React.FC<BatteryProps> = ({ step, totalSteps }) => {
  const steppx = ["240", "110", "70", "50"];
  useEffect(() => {
    console.log("Battery");
    console.log(step);
    console.log(totalSteps);
  }, [step]);
  return (
    <div className="flex bg-[url('/assets/battery.svg')] sm:w-[150px] h-[530px] bg-no-repeat bg-cover items-center justify-start flex-col-reverse gap-2">
      {Array(totalSteps * 2)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`w-[105px] ${`h-[${
              steppx[totalSteps - 1]
            }px]`} mb-2 rounded-sm bg-purple-600 shadow-2xl shadow-purple-700 ${
              index < step * 2
                ? index == step * 2 - 2 || index == step * 2 - 1
                  ? "animate-fill-drain"
                  : "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
    </div>
  );
};

export default Battery;
