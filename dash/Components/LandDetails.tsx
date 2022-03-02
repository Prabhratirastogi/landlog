import { Listbox } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

type land_status = "pending" | "problematic" | "ok";

interface LandDetailItemProps {
  name: string;
  area: number;
  status: land_status;
  count: {
    done: number;
    total: number;
  }
};

const LandDetailsData: LandDetailItemProps[] = [
  { name: "Land 5", area: 44.1, count: { done:  3, total:  4 }, status: "ok" },
  { name: "Land 2", area: 5.9,  count: { done: 11, total: 32 }, status: "problematic" },
  { name: "Land 4", area: 0.3,  count: { done:  2, total:  9 }, status: "problematic" },
  { name: "Land 1", area: 2.1,  count: { done: 23, total: 62 }, status: "pending" },
  { name: "Land 6", area: 7.7,  count: { done: 41, total: 52 }, status: "ok" },
  { name: "Land 7", area: 3.3,  count: { done:  0, total:  3 }, status: "problematic" },
  { name: "Land 3", area: 0.7,  count: { done:  6, total:111 }, status: "problematic" }
];

const LandDetailItem: React.FC<LandDetailItemProps> = ({ ...props }) => {
  // const left: number = props.count.total - props.count.done;
  const percentage_left: number = Math.round((props.count.done / props.count.total) * 100);

  const color_status_map: { 
    [key: string]: { 
      [key: string ]: string 
    } } = {
    pending: {
      text: 'text-yellow-500',
      bg: 'bg-yellow-100',
      divide: 'divide-yellow-200',
      ring: 'ring-yellow-200'
    },
    problematic: {
      text: 'text-red-500',
      bg: 'bg-red-100',
      divide: 'divide-red-200',
      ring: 'ring-red-200'
    },
    ok: {
      text: 'text-teal-500',
      bg: 'bg-teal-100',
      divide: 'divide-teal-200',
      ring: 'ring-teal-200'
    }
  };
  
  return (
    <div className="flex px-5 py-2 bg-blue-100 hover:bg-blue-200 hover:shadow-inner">
      <div className="flex flex-col flex-grow">
        <span className="text-slate-500">{ props.name }</span>
        <span className="text-slate-400 text-xs">{ props.area } acre</span>
      </div>
      <div className={`${color_status_map[props.status].bg} ${color_status_map[props.status].divide} ${color_status_map[props.status].ring} rounded-full shadow-inner place-self-center divide-x ring-1 ring-inset`}>
        <span className={`px-1.5 ${color_status_map[props.status].text}`}>{ percentage_left }%</span>
        <span className={`px-1.5 ${color_status_map[props.status].text}`}>{ props.count.done }</span>
      </div>
    </div>
  );
}

const filter_options = [
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
        
        <div className="">
        <Listbox value={selectedOption} onChange={setSelectedOption}>
          <Listbox.Button className="relative py-1 pl-3 pr-10 text-left rounded-lg shadow-inner cursor-default sm:text-sm ring-1 ring-sky-300 bg-blue-300">
            <span className="block truncate text-sky-600">{selectedOption.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-4 h-4 text-sky-600"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-4/5 py-1 mt-1 overflow-auto text-base bg-blue-100 rounded-lg shadow-lg max-h-60 ring-1 ring-blue-200 focus:outline-none sm:text-sm">
            {filter_options.map((option) => (
              <Listbox.Option
                key={option.id}
                value={option}
                className={ ({ active }) =>
                  `cursor-default select-none relative py-1 pl-10 pr-4 ${
                    active ? 'text-sky-900 bg-blue-300' : 'text-gray-900'
                  }`}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        </div>
        </div>
        <div className="flex flex-col overflow-y-scroll bg-blue-50 divide-y divide-blue-200">
          { 
            LandDetailsData
              .filter(a => selectedOption.filter === 'none' ? true : (selectedOption.filter === "ok" ? a.status === "ok" : a.status !== "ok"))
              .sort((a, b) => (Math.round(b.count.done * 100 / b.count.total) - Math.round(a.count.done * 100 / a.count.total)))
              .map((landData, index) => ( <LandDetailItem {...landData} key={index}/> ))
          }
        </div>
      </div>
      <div className="bg-sky-100 w-96 flex flex-col">
        <div className="text-sm bg-sky-blue h-fit p-3 text-sky-700 flex">
          <span className="flex-grow place-self-center select-none">Details</span>
          
          <div className="flex group">
            <div role="tooltip" className="group-hover:opacity-100 opacity-0 py-1 px-3 text-sm font-medium bg-blue-100 text-sky-400 rounded-lg transition-opacity duration-300 delay-200">
              Show details
            </div>
            <Link href="/land/land_1" passHref>
            <div className="place-self-center ml-2 bg-sky-200 p-1 rounded-xl group-hover:bg-sky-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              </div>
            </Link>
          </div>
        </div>
        <span className="px-6 text-slate-500">Checklist</span>
      </div>
    </div>
  );
}