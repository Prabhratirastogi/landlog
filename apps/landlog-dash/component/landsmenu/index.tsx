import { LandInfo, LandItem } from './LandItem';
import { FilterPane } from './FilterPane';
import { LandDetails } from './LandDetails';
import { Transition } from '@headlessui/react';
import { useActiveSelection } from '../../utilities/useActiveSelection';

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
      <div className="h-full w-64 rounded-2xl cursor-default overflow-x-hidden ring-1 ring-blue-200 shadow-2xl">
        <FilterPane />
        <div className="w-64 h-full overflow-y-scroll">
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
        enter="transition-transform transform-gpu ease-out"
        enterFrom="-translate-x-2"
        enterTo="translate-x-0"
        leave="transition-transform transform-gpu ease-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-2"
      >
        <LandDetails />
      </Transition>
    </>
  );
}
