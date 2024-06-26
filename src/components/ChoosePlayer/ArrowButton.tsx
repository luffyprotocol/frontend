import React from "react";

interface ButtonProps {
  id: number;
  setplayerId: (id: number) => void;
}

const ArrowButton: React.FC<ButtonProps> = ({ id, setplayerId }) => {
  return (
    <button
      className={`flex justify-center items-center bg-contain bg-no-repeat w-[100px] h-[80px] lg:w-[70px] lg:h-[70px]`}
      style={{
        backgroundImage: `url('/assets/ButtonFrame.svg')`,
      }}
      onClick={() => {
        console.log("first");
        setplayerId(id);
      }}
    >
      <div className="flex items-center justify-center ">
        {/* <div className='self-center'>GO</div> */}
      </div>
    </button>
  );
};

export default ArrowButton;
