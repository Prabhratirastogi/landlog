import { LandDetailItemProps } from './land-detail-types';
import { classNames } from '../utilities/classNames';

const LandDetailItem: React.FC<LandDetailItemProps> = ({ ...props }) => {
  const percentage_left: number = Math.round((props.count.done / props.count.total) * 100);

  const color_status_map: {
    [key: string]: {
      [key: string]: string;
    };
  } = {
    pending: {
      text: 'text-yellow-500',
      bg: 'bg-yellow-100',
      divide: 'divide-yellow-200',
      ring: 'ring-yellow-200',
    },
    problematic: {
      text: 'text-red-500',
      bg: 'bg-red-100',
      divide: 'divide-red-200',
      ring: 'ring-red-200',
    },
    ok: {
      text: 'text-teal-500',
      bg: 'bg-teal-100',
      divide: 'divide-teal-200',
      ring: 'ring-teal-200',
    },
  };

  return (
    <div
      className={classNames('flex px-5 py-2 bg-blue-100 hover:bg-blue-200 hover:shadow-inner')}
    >
      <div className="flex flex-col flex-grow">
        <span className="text-slate-500">{props.name}</span>
        <span className="text-slate-400 text-xs">{props.area} acre</span>
      </div>
      <div
        className={`${color_status_map[props.status].bg} ${
          color_status_map[props.status].divide
        } ${
          color_status_map[props.status].ring
        } rounded-full shadow-inner place-self-center divide-x ring-1 ring-inset`}
      >
        <span className={`px-1.5 ${color_status_map[props.status].text}`}>
          {percentage_left}%
        </span>
        <span className={`px-1.5 ${color_status_map[props.status].text}`}>
          {props.count.done}
        </span>
      </div>
    </div>
  );
};

export default LandDetailItem;
