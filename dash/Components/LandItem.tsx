export interface LandInfo {
  name: string;
  location: { city: string, state: string };
  count: number;
};

export const LandItem = ({ name, location, count }: LandInfo) => {
  return (
    <div className='w-64 flex p-4 hover:ring-1 ring-inset ring-blue-200 bg-blue-100 hover:bg-blue-200 hover:shadow-inner'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 place-self-center mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div className='flex flex-col flex-grow'>
        <span className='capitalize text-sky-700'>{ name }</span>
        <span className='capitalize text-xs text-slate-500'>{ location.city }, {location.state}</span>
      </div>
      <span className='place-self-center text-sky-500 bg-slate-200 rounded-full p-2 text-xs shadow-inner'>
        {count}
      </span>
    </div>
  );
}