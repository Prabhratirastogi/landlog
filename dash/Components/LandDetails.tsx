import { classNames } from "../utilities/classNames";

export const LandDetails = () => {
  return (
    <div className="h-96 w-full mr-2 my-2 rounded-xl flex overflow-hidden divide-sky-200 divide-x shadow-inner">
      <div className="h-full bg-sky-100 w-48 flex">
        <span className="text-sm bg-sky-200 p-4 w-full h-fit text-sky-700">Lands Column</span>
      </div>
      <div className="bg-sky-100 flex flex-grow">
        <span className="text-sm bg-sky-200 h-fit flex-grow p-4 text-sky-700">Details</span>
      </div>
    </div>
  );
}