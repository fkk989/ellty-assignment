import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { PrimaryButton } from "./buttons/PrimaryButton";

export const Form = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  return (
    <div className="w-[370px] h-[326px] flex flex-col gap-[10px]  p-[20px] custom-shadow bg-white rounded-lg">
      <Checkbox
        lable="All pages"
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        isAllChecker={true}
        onChange={() => {}}
      />
      <div className="w-full h-[1px] bg-[#CDCDCD] mb-[10px]"></div>
      <Checkbox
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        lable="Page 1"
        onChange={() => {
          console.log("Page 1 on change");
        }}
      />
      <Checkbox
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        lable="Page 2"
        onChange={() => {
          console.log("Page 2 on change");
        }}
      />
      <Checkbox
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        lable="Page 3"
        onChange={() => {
          console.log("Page 3 on change");
        }}
      />
      <Checkbox
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        lable="Page 4"
        onChange={() => {
          console.log("Page 4 on change");
        }}
      />
      <div className="w-full h-[1px] bg-[#CDCDCD]"></div>
      <PrimaryButton text="Done" />
    </div>
  );
};
