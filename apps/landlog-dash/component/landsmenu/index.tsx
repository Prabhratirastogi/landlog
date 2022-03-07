import { LandInfo, LandItem } from './LandItem';
import { FilterPane } from './FilterPane';
import { LandDetails } from './LandDetails';
import { Transition } from '@headlessui/react';
import { useActiveSelection } from 'utils/useActiveSelection';

const lands: LandInfo[] = [
  {
    id: 1,
    name: 'sambodhi retreat',
    location: { city: 'patna', state: 'bihar' },
    count: 33,
  },
  {
    id: 2,
    name: 'branch 1',
    location: { city: 'gaya', state: 'bihar' },
    count: 1,
  },
  {
    id: 3,
    name: 'branch 2',
    location: { city: 'gaya', state: 'bihar' },
    count: 23,
  },
  {
    id: 4,
    name: 'branch 3',
    location: { city: 'gaya', state: 'bihar' },
    count: 65,
  },
  {
    id: 5,
    name: 'branch 1',
    location: { city: 'patna', state: 'bihar' },
    count: 92,
  },
  {
    id: 6,
    name: 'branch 2',
    location: { city: 'patna', state: 'bihar' },
    count: 8,
  },
  {
    id: 7,
    name: 'branch 3',
    location: { city: 'patna', state: 'bihar' },
    count: 1,
  },
  {
    id: 8,
    name: 'branch 1',
    location: { city: 'patna', state: 'bihar' },
    count: 92,
  },
  {
    id: 9,
    name: 'branch 2',
    location: { city: 'patna', state: 'bihar' },
    count: 8,
  },
  {
    id: 10,
    name: 'branch 3',
    location: { city: 'patna', state: 'bihar' },
    count: 1,
  },
  {
    id: 11,
    name: 'branch 3',
    location: { city: 'gaya', state: 'bihar' },
    count: 65,
  },
  {
    id: 12,
    name: 'branch 1',
    location: { city: 'patna', state: 'bihar' },
    count: 92,
  },
  {
    id: 13,
    name: 'branch 2',
    location: { city: 'patna', state: 'bihar' },
    count: 8,
  },
  {
    id: 14,
    name: 'branch 3',
    location: { city: 'patna', state: 'bihar' },
    count: 1,
  },
  {
    id: 15,
    name: 'branch 1',
    location: { city: 'patna', state: 'bihar' },
    count: 92,
  },
  {
    id: 16,
    name: 'branch 2',
    location: { city: 'patna', state: 'bihar' },
    count: 8,
  },
  {
    id: 17,
    name: 'branch 3',
    location: { city: 'patna', state: 'bihar' },
    count: 1,
  },
].sort((a, b) => b.count - a.count);

export default function LandsMenu() {
  const { active, setSelection } = useActiveSelection();

  return (
    <>
      <div className="h-full w-64 rounded-2xl cursor-default overflow-hidden ring-1 ring-blue-200 shadow-2xl flex flex-col">
        <FilterPane />
        <div className="overflow-y-scroll">
          <div className="bg-blue-100 divide-y divide-blue-200">
            {lands.map((land, index) => (
              <LandItem
                key={index}
                info={{
                  name: land.name,
                  location: {
                    city: land.location.city,
                    state: land.location.state,
                  },
                  count: land.count,
                  active: active == index,
                }}
                onclick={(e) => setSelection(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <Transition
        show={active > -1}
        className="absolute inset-2 m-2 sm:m-0 w-64 sm:w-96 sm:relative"
        enter="transition-transform transform-gpu ease-out"
        enterFrom="-translate-x-2"
        enterTo="translate-x-0"
        leave="transition-transform transform-gpu ease-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-2"
      >
        <LandDetails close={(e) => setSelection(-1)} />
      </Transition>
    </>
  );
}
