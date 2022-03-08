import { MouseEventHandler } from 'react';
import { classNames } from 'utils/classNames';
import { LocationMarkerIcon } from '@heroicons/react/outline';

export interface LandInfo {
  name: string;
  location: { city: string; state: string };
  count: number;
  active?: boolean;
}

type LandItemProps = {
  info: LandInfo;
  onclick: MouseEventHandler;
};

export const LandItem: React.FC<LandItemProps> = ({ ...props }) => {
  return (
    <div
      className={classNames(
        props.info.active ? 'bg-sky-300 hover:bg-sky-400' : 'bg-blue-100 hover:bg-blue-200',
        'w-64 flex p-4 hover:ring-1 ring-inset ring-blue-200 hover:shadow-inner',
      )}
      onClick={props.onclick}
    >
      <LocationMarkerIcon className="h-6 w-6 text-slate-400 place-self-center mr-2" />
      <div className="flex flex-col flex-grow">
        <span className="capitalize text-sky-700">{props.info.name}</span>
        <span className="capitalize text-xs text-slate-500">
          {props.info.location.city}, {props.info.location.state}
        </span>
      </div>
      <span className="place-self-center text-sky-500 bg-slate-200 rounded-full p-2 text-xs shadow-inner">
        {props.info.count}
      </span>
    </div>
  );
};
