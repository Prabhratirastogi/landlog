import Link from "next/link";
import { useState } from "react";
import { LandPreviewInfo } from "./LandPreviewInfo";
import { LandFilter } from "./LandFilter";
import { option } from "./land-filter-type";
import { LandDetailItemProps } from "./land-detail-types";
import LandDetailItem from "./LandDetailItem";
import { Transition } from "@headlessui/react";

const LandDetailsData: LandDetailItemProps[] = [
  { id:  1, name: "Land 5", area: 44.1, count: { done:  3, total:  4 }, status: "ok" },
  { id:  2, name: "Land 2", area: 5.9,  count: { done: 11, total: 32 }, status: "problematic" },
  { id:  3, name: "Land 4", area: 0.3,  count: { done:  2, total:  9 }, status: "problematic" },
  { id:  4, name: "Land 1", area: 2.1,  count: { done: 23, total: 62 }, status: "pending" },
  { id:  5, name: "Land 6", area: 7.7,  count: { done: 41, total: 52 }, status: "ok" },
  { id:  6, name: "Land 7", area: 3.3,  count: { done:  0, total:  3 }, status: "problematic" },
  { id:  7, name: "Land 3", area: 0.7,  count: { done:  6, total:111 }, status: "problematic" }
];

const filter_options: option[] = [
  { id: 1, name: 'All', filter: 'none' },
  { id: 2, name: 'Complete', filter: 'ok' },
  { id: 3, name: 'Pending', filter: 'pending' },
];

export const LandDetails: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(filter_options[0]);

  return (
    <div className="h-96 mx-2 rounded-2xl flex overflow-hidden divide-sky-200 divide-x shadow-2xl">
      <div className="h-full bg-blue-100 w-48 flex flex-col divide-y divide-blue-200">
        <div className="w-full bg-sky-200 flex flex-col relative p-4 shadow-inner">
        <span className="text-sm w-full h-fit text-sky-700 select-none pb-2">Land Packets</span>
        <LandFilter filter_options={ filter_options } selectedOption={ selectedOption } setSelectedOption={ setSelectedOption } />
        </div>
        <div className="flex flex-col overflow-y-scroll bg-blue-50 divide-y divide-blue-200">
          { 
            LandDetailsData
              .filter(a => selectedOption.filter === 'none' ? true : (selectedOption.filter === "ok" ? a.status === "ok" : a.status !== "ok"))
              .sort((a, b) => (Math.round(b.count.done * 100 / b.count.total) - Math.round(a.count.done * 100 / a.count.total)))
              .map((landData, index) => ( 
                <LandDetailItem 
                  {...landData}
                  key={index}
                /> 
              ))
          }
        </div>
      </div>
        <LandPreviewInfo />
    </div>
  );
}