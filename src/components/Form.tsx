import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { PrimaryButton } from "./buttons/PrimaryButton";

const pageDataArrr = [
  {
    name: "Page 1",
    isChecked: false,
  },
  {
    name: "Page 2",
    isChecked: false,
  },
  {
    name: "Page 3",
    isChecked: false,
  },
  {
    name: "Page 4",
    isChecked: false,
  },
];

export const Form = () => {
  const [pageData, setPageData] =
    useState<{ name: string; isChecked: boolean }[]>(pageDataArrr);

  return (
    <div className="w-[370px] h-[326px] flex flex-col gap-[10px]  p-[20px] custom-shadow bg-white rounded-lg">
      <Checkbox
        lable="All pages"
        isChecked={
          pageData.filter((data) => data.isChecked === false).length === 0
        }
        setIsChecked={setPageData}
        isAllChecker={true}
        onChange={() => {}}
      />
      <div className="w-full h-[1px] bg-[#CDCDCD] mb-[10px]"></div>
      {pageData.map(({ name, isChecked }) => {
        return (
          <Checkbox
            key={name}
            setIsChecked={setPageData}
            isChecked={isChecked}
            lable={name}
            onChange={() => {
              console.log(`${name} onChange`);
            }}
          />
        );
      })}

      <div className="w-full h-[1px] bg-[#CDCDCD]"></div>
      <PrimaryButton text="Done" />
    </div>
  );
};
