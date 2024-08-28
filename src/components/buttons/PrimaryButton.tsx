import React from "react";

interface PrimaryButtonProps {
  text: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <div className="w-full h-[40px] flex justify-center items-center font-[200] bg-[#FFCE22] hover:bg-[#FFD84D] rounded-md cursor-pointer">
      {text}
    </div>
  );
};
