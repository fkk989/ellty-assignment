import clsx from "clsx";
import React, { SetStateAction, useEffect } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

//
interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<
    SetStateAction<
      {
        name: string;
        isChecked: boolean;
      }[]
    >
  >;
  lable: string;
  onChange: () => void;
  isAllChecker?: boolean;
}
//

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  setIsChecked,
  lable,
  onChange,
  isAllChecker,
}) => {
  //   running onChange wheneven isChecked changes
  useEffect(() => {
    onChange();
  }, [isChecked]);

  const handleClick = () => {
    if (isAllChecker) {
      setIsChecked((crntData) => {
        const tempPageData = crntData.map((pageData) => ({
          ...pageData,
          isChecked: !isChecked,
        }));
        return tempPageData;
      });
      return;
    }

    //  if its not all checker checkbox
    setIsChecked((crntData) =>
      crntData.map((pageData) =>
        pageData.name === lable
          ? { ...pageData, isChecked: !pageData.isChecked }
          : pageData
      )
    );
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
        {/* checkbox */}
        <div
          className={clsx(
            "absolute w-full h-full flex justify-center items-center top-0 border-[#E1E1E1] border-[1.5px] rounded-md visible-box group-hover:border-[#BDBDBD]",
            isChecked &&
              "bg-[#2369F6] group-hover:bg-[#2369f6ce] group-hover:border-white border-white"
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
