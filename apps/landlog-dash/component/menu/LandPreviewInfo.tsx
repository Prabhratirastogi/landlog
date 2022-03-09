import Link from 'next/link';
import { ArrowsExpandIcon } from '@heroicons/react/outline';

export const LandPreviewInfo: React.FC = () => {
  return (
    <div className="bg-sky-100 w-64 md:w-72 lg:w-96 md:flex flex-col hidden">
      <div className="text-sm bg-sky-blue h-fit p-3 text-sky-700 flex">
        <span className="flex-grow place-self-center select-none">Details</span>

        <div className="flex group">
          <div
            role="tooltip"
            className="group-hover:opacity-100 opacity-0 py-1 px-3 text-sm font-medium bg-blue-100 text-sky-400 rounded-lg transition-opacity duration-300 delay-200"
          >
            Show details
          </div>
          <Link href="/land/1" passHref>
            <div className="place-self-center ml-2 bg-sky-200 p-1 rounded-xl group-hover:bg-sky-300">
              <ArrowsExpandIcon className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
      <span className="px-6 text-slate-500">Checklist</span>
    </div>
  );
};
