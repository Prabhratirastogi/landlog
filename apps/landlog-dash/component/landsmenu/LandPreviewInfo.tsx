import Link from 'next/link';

export const LandPreviewInfo: React.FC = () => {
  return (
    <div className="bg-sky-100 w-72 md:flex flex-col hidden">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <span className="px-6 text-slate-500">Checklist</span>
    </div>
  );
};
