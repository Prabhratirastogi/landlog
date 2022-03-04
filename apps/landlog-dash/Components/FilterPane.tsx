import { useStore } from '../store';
import { classNames } from '../utilities/classNames';

export type states_type = 'all' | 'bh' | 'jh' | 'wb' | 'up' | 'od';

export const state_names = {
  all: 'All',
  bh: 'Bihar',
  jh: 'Jharkhand',
  wb: 'West Bengal',
  up: 'Uttar pradesh',
  od: 'Odissa',
};

export type SelectableTagProps = {
  filter: states_type;
};

export const SelectableTag = ({ filter }: SelectableTagProps) => {
  const [stateFilter, setStateFilter] = useStore((state) => [
    state.stateFilter,
    state.setStateFilter,
  ]);

  return (
    <>
      <span
        className={classNames(
          stateFilter == filter
            ? 'bg-blue-300 shadow-inner ring-sky-400/40'
            : 'ring-sky-300/40',
          'px-3 py-1 m-1 rounded-xl ring-1 hover:bg-blue-300/50 text-sky-600 cursor-default hover:transition-colors transition duration-50 ease-in select-none',
        )}
        onClick={(e) => setStateFilter(filter)}
      >
        {state_names[filter]}
      </span>
    </>
  );
};

export const FilterPane = () => {
  return (
    <div className="flex flex-row flex-wrap p-2 bg-sky-200 shadow-inner">
      <SelectableTag filter="all" />
      <SelectableTag filter="bh" />
      <SelectableTag filter="jh" />
      <SelectableTag filter="wb" />
      <SelectableTag filter="od" />
    </div>
  );
};
