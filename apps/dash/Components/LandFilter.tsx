import { Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { option } from './land-filter-type';

interface LandFilterProps {
  selectedOption: option;
  setSelectedOption: any;
  filter_options: option[];
};

export const LandFilter : React.FC<LandFilterProps> = ({...props}) => {
  return (
    <div className="">
      <Listbox value={props.selectedOption} onChange={props.setSelectedOption}>
        <Listbox.Button className="relative py-1 pl-3 pr-10 text-left rounded-lg shadow-inner cursor-default sm:text-sm ring-1 ring-sky-300 bg-blue-300">
          <span className="block truncate text-sky-600">{props.selectedOption.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-4 h-4 text-sky-600"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute w-4/5 py-1 mt-1 overflow-auto text-base bg-blue-100 rounded-lg shadow-lg max-h-60 ring-1 ring-blue-200 focus:outline-none sm:text-sm">
          {props.filter_options.map((option) => (
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
  );
}