import clsx from "clsx";
import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

//
interface CheckboxProps {
  lable: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isAllChecked?: boolean;
  setIsAllChecked?: React.Dispatch<SetStateAction<boolean>>;
  isAllChecker?: boolean;
}
//

export const Checkbox: React.FC<CheckboxProps> = ({
  lable,
  onChange,
  isAllChecked,
  setIsAllChecked,
  isAllChecker,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (typeof isAllChecked !== "undefined") {
      setIsChecked(isAllChecked);
    }
  }, [isAllChecked]);

  const handleClick = () => {
    // Update the parent state if available
    if (
      typeof isAllChecked !== "undefined" &&
      typeof setIsAllChecked !== "undefined" &&
      isAllChecker
    ) {
      setIsAllChecked((crnt) => !crnt);
      return;
    }
    setIsChecked((crnt) => !crnt);
  };
  return (
    <div
      onClick={handleClick}
      className="w-full h-[40px] flex justify-between group cursor-pointer"
    >
      <label htmlFor={lable} className=" font-[200] cursor-pointer">
        {lable}
      </label>
      <div className="relative w-[25px] h-[25px]  overflow-hidden">
        {/* invisible checkbox  */}
        <input
          id={lable}
          type="checkbox"
          className="absolute w-0 h-0"
          onChange={onChange}
          checked={isChecked}
        />
        {/* visible box  */}
        <div
          className={clsx(
            "absolute w-full h-full flex justify-center items-center top-0 border-[#E1E1E1] border-[1.5px] rounded-md visible-box",
            !isChecked && "group-hover:border-[#BDBDBD]",
            isChecked &&
              "bg-[#2369F6] group-hover:bg-[#2369f6e0] group-hover:border-white border-white"
          )}
        >
          <IoCheckmarkOutline
            className={clsx(
              "text-[25px] text-white",
              !isChecked && "group-hover:text-[#E3E3E3]"
            )}
          />
        </div>
      </div>
    </div>
  );
};
